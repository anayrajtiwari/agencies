import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string; // Hidden spam-trap field
}

// In-memory rate limiting map: IP -> timestamp[]
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 submissions per 15 minutes per IP

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait 15 minutes or email us directly at agenciesbyshri@gmail.com.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Request Body
    const body: ContactRequestBody = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot bot protection: if the hidden field is filled, silently succeed without sending
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json(
        {
          success: true,
          message: "Dispatch received by Directorate.",
        },
        { status: 200 }
      );
    }

    // Validation
    const cleanName = (name || "").trim();
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanSubject = (subject || "").trim();
    const cleanMessage = (message || "").trim();

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your name or organization (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid contact email address." },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a detailed brief or project scope (minimum 10 characters)." },
        { status: 400 }
      );
    }

    const finalSubject = cleanSubject || "October 2026 Cohort Application & Brief";

    // 3. Credentials Configuration
    const gmailUser = process.env.GMAIL_USER || "agenciesbyshri@gmail.com";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const receiver = process.env.DIRECTORATE_RECEIVER || "agenciesbyshri@gmail.com";

    if (!gmailAppPassword) {
      console.warn(
        "[API /api/contact] GMAIL_APP_PASSWORD is not set in environment variables. Falling back to guidance response."
      );
      return NextResponse.json(
        {
          success: false,
          missingConfig: true,
          error:
            "Direct SMTP sending is waiting for Gmail App Password. Please use 'Open in Gmail Web' or set GMAIL_APP_PASSWORD in .env.local.",
        },
        { status: 503 }
      );
    }

    // 4. Create Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // 5. Construct Dossier Email (Archival Editorial Aesthetic)
    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const plainTextBody = `
======================================================
AGENCIES BY SHRI — OFFICIAL DISPATCH BRIEF
======================================================

SENDER DETAILS:
- Name / Company: ${cleanName}
- Reply Email:    ${cleanEmail}
- Target Subject: ${finalSubject}
- Timestamp:      ${formattedDate} (IST)
- IP Origin:      ${ip}

------------------------------------------------------
PROJECT BRIEF & REQUIREMENTS:
------------------------------------------------------
${cleanMessage}

======================================================
Direct Reply: Simply reply to this email to contact ${cleanName} directly at ${cleanEmail}.
Agencies, by SHRI • Division 03 • Directorate of Digital Presence
======================================================
`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Brief: ${cleanName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4EFE6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #171614;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F4EFE6; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #FAF5E6; border: 1px solid #D5C7AD; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(35,25,15,0.08);">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 28px 32px; background-color: #1E140C; border-bottom: 2px solid #8A241C;">
              <table width="100%">
                <tr>
                  <td>
                    <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #D98E72; display: block; margin-bottom: 4px;">
                      DIRECTORATE DISPATCH • OFFICIAL INTAKE
                    </span>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #FAF4E4; letter-spacing: 0.05em;">
                      AGENCIES BY SHRI
                    </h1>
                  </td>
                  <td align="right">
                    <span style="background-color: #8A241C; color: #FAF4E4; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; padding: 4px 10px; border-radius: 9999px;">
                      NEW BRIEF
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Metadata Section -->
          <tr>
            <td style="padding: 24px 32px; background-color: #F1E7CF; border-bottom: 1px solid #DFCFAD;">
              <table width="100%" cellspacing="0" cellpadding="4" style="font-size: 12px; color: #5C4D38;">
                <tr>
                  <td width="120" style="font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8A241C;">Sender:</td>
                  <td style="font-weight: 700; color: #171614; font-size: 14px;">${cleanName}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8A241C;">Reply Email:</td>
                  <td><a href="mailto:${cleanEmail}" style="color: #171614; font-weight: 600; text-decoration: underline;">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td style="font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8A241C;">Subject:</td>
                  <td style="color: #171614; font-weight: 600;">${finalSubject}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8A241C;">Received:</td>
                  <td style="color: #5C4D38;">${formattedDate} (IST)</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Brief Body -->
          <tr>
            <td style="padding: 32px; background-color: #FAF5E6;">
              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #8A241C; display: block; margin-bottom: 12px;">
                PROJECT OVERVIEW & REQUIREMENTS
              </span>
              <div style="background-color: #FFFFFF; border: 1px solid #D5C7AD; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.7; color: #171614; white-space: pre-wrap; font-family: inherit;">${cleanMessage}</div>

              <!-- Quick Action Button -->
              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${cleanEmail}?subject=Re: [Agencies by SHRI] ${encodeURIComponent(finalSubject)}" style="display: inline-block; background-color: #171614; color: #FAF4E4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; text-decoration: none; padding: 12px 28px; border-radius: 9999px;">
                  Reply to ${cleanName} &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer Stamp -->
          <tr>
            <td style="padding: 20px 32px; background-color: #EAE0C7; border-top: 1px solid #DFCFAD; text-align: center; font-size: 11px; color: #7D643E;">
              <span style="display: block; font-weight: 600; margin-bottom: 4px;">
                AGENCIES • BY SHRI • DIVISION 03
              </span>
              <span>
                Automated Direct Intake Portal • Sent to agenciesbyshri@gmail.com
              </span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // 6. Send Email through Google SMTP
    await transporter.sendMail({
      from: `"Agencies by SHRI Brief Desk" <${gmailUser}>`,
      to: receiver,
      replyTo: cleanEmail,
      subject: `[Agencies Brief] ${finalSubject} — from ${cleanName}`,
      text: plainTextBody,
      html: htmlBody,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been delivered directly to the Agencies Directorate inbox.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[API /api/contact] SMTP Send Failure:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      {
        success: false,
        error: "Failed to dispatch brief via SMTP gateway. Please use the Gmail Web or Direct Mail link below.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
