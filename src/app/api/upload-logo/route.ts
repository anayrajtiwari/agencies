import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("logo") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No logo file provided. Please provide a file in the 'logo' field." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const publicDir = path.join(process.cwd(), "public");
    await fs.mkdir(publicDir, { recursive: true });

    // Save as primary logo.jpeg and keep backup copy
    const targetPath = path.join(publicDir, "logo.jpeg");
    await fs.writeFile(targetPath, buffer);

    const namedPath = path.join(publicDir, "agencies-by-shri-logo.jpeg");
    await fs.writeFile(namedPath, buffer);

    return NextResponse.json({
      success: true,
      message: "Logo uploaded and saved successfully to public/logo.jpeg.",
      path: "/logo.jpeg",
      size: file.size,
      name: file.name,
    });
  } catch (error: any) {
    console.error("Error uploading logo:", error);
    return NextResponse.json(
      { error: "Failed to upload logo", details: error.message },
      { status: 500 }
    );
  }
}
