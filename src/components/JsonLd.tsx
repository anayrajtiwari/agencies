import React from "react";

export const structuredGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://agencies.shri.org.in/#website",
      "url": "https://agencies.shri.org.in",
      "name": "Agencies by SHRI",
      "alternateName": [
        "Agencies",
        "Agencies By SHRI",
        "Agencies SHRI",
        "SHRI Agencies",
        "SHRI Agency",
        "Shri Hari Redirect Initiative Agency",
        "SHRI Division 03"
      ],
      "description":
        "Agencies by SHRI (Division 03 of Shri Hari Redirect Initiative) is an intentional growth practice and bespoke creative studio founded by Anay Raj Tiwari, delivering bespoke social media management, organic search authority (Deep Search SEO), brand positioning, and web engineering.",
      "publisher": {
        "@id": "https://agencies.shri.org.in/#agency"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": "https://agencies.shri.org.in/#agency",
      "name": "Agencies by SHRI",
      "alternateName": [
        "Agencies",
        "Agencies By SHRI",
        "Agencies SHRI",
        "SHRI Agencies",
        "SHRI Agency",
        "Shri Hari Redirect Initiative Agency"
      ],
      "legalName": "Agencies by SHRI (Division 03, Shri Hari Redirect Initiative)",
      "url": "https://agencies.shri.org.in",
      "logo": "https://agencies.shri.org.in/logo.png",
      "image": "https://agencies.shri.org.in/og-image.png",
      "description":
        "Strategic Creative Studio and Digital Presence & Growth Agency founded by Anay Raj Tiwari under Shri Hari Redirect Initiative (SHRI). Specializing in bespoke social media management, deep search SEO authority, brand positioning, and bespoke web engineering.",
      "email": "agenciesbyshri@gmail.com",
      "priceRange": "$$$$",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Global"
      },
      "founder": {
        "@type": "Person",
        "@id": "https://anay.shri.org.in/#person",
        "name": "Anay Raj Tiwari",
        "url": "https://anay.shri.org.in",
        "jobTitle": "Founder & Systems Architect",
        "sameAs": [
          "https://x.com/__anay___",
          "https://instagram.com/anayrajtiwari",
          "https://github.com/anayrajtiwari"
        ]
      },
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://shri.org.in/#organization",
        "name": "Shri Hari Redirect Initiative",
        "alternateName": ["SHRI", "SHRI Ecosystem"],
        "url": "https://shri.org.in",
        "sameAs": [
          "https://twitter.com/shri_vision",
          "https://instagram.com/shri_vision",
          "https://github.com/anayrajtiwari"
        ]
      },
      "sameAs": [
        "https://x.com/__anay___",
        "https://github.com/anayrajtiwari/agencies",
        "https://shri.org.in",
        "https://anay.shri.org.in"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Agencies Strategic Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "End-to-End Social Media Growth",
              "description":
                "Bespoke content architecture, founder ghostwriting, and dedicated channel ownership for category leaders."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deep Search SEO & Search Authority",
              "description":
                "Modern algorithmic visibility combining technical SEO, generative engine optimization (GEO), and answer engine positioning (AEO)."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Positioning & Digital Presence",
              "description":
                "Strategic narrative construction, digital persona design, and cohesive market differentiation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bespoke Web Craft & Engineering",
              "description":
                "Full-stack Next.js web application development, interactive digital editorial systems, and high-performance tactile interfaces."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://agencies.shri.org.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Agencies by SHRI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Agencies by SHRI (officially 'Agencies', Division 03 of Shri Hari Redirect Initiative) is a bespoke strategic creative studio and digital presence agency founded by Anay Raj Tiwari. It specializes in bespoke social media growth, organic search authority (Deep Search SEO), brand positioning, and web engineering for category-defining brands and ambitious founders."
          }
        },
        {
          "@type": "Question",
          "name": "Who founded Agencies by SHRI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Agencies by SHRI was founded by Anay Raj Tiwari, founder and systems architect of the Shri Hari Redirect Initiative (SHRI)."
          }
        },
        {
          "@type": "Question",
          "name": "What services does Agencies by SHRI offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Agencies by SHRI provides four core growth pillars: 01 End-to-End Social Media Management, 02 Deep Search SEO & Search Authority, 03 Brand Positioning & Digital Presence, and 04 Bespoke Web Craft & Engineering."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Agencies by SHRI seasonal cohort model work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Agencies by SHRI operates on an intentional seasonal cohort intake. Prospective clients submit a direct brief via https://agencies.shri.org.in/contact or agenciesbyshri@gmail.com, which is evaluated directly by leadership for technical ambition and strategic fit before executing a targeted 4-phase sprint."
          }
        },
        {
          "@type": "Question",
          "name": "How can founders submit a brief to Agencies by SHRI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Founders and brand leads can transmit their project details directly through the intake desk at https://agencies.shri.org.in/contact or email agenciesbyshri@gmail.com for direct evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "Is Agencies by SHRI part of the SHRI ecosystem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Agencies by SHRI is Division 03 of the Shri Hari Redirect Initiative (SHRI), uniting software systems, physical hardware, digital presence agency, and strategic capital."
          }
        }
      ]
    }
  ]
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredGraphSchema),
      }}
    />
  );
}
