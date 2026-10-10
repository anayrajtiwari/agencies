import React from "react";

export interface SchemaPerson {
  "@type": "Person";
  name: string;
  url: string;
}

export interface SchemaOrganization {
  "@type": "Organization";
  name: string;
  url: string;
}

export interface SchemaWebSite {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
}

export interface ProfessionalServiceSchema {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  url: string;
  logo: string;
  description: string;
  founder: SchemaPerson;
  parentOrganization: SchemaOrganization;
  email: string;
  areaServed: string;
  priceRange: string;
}

export const professionalServiceSchema: ProfessionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Agencies by SHRI",
  url: "https://agencies.shri.org.in",
  logo: "https://agencies.shri.org.in/favicon.ico",
  description:
    "Strategic Creative Studio and Digital Presence & Growth Agency. Specializing in bespoke social media management, organic search authority (SEO), brand positioning, and web engineering.",
  founder: {
    "@type": "Person",
    name: "Anay Raj Tiwari",
    url: "https://anay.shri.org.in",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "SHRI Organization",
    url: "https://shri.org.in",
  },
  email: "agenciesbyshri@gmail.com",
  areaServed: "Global",
  priceRange: "$$$$",
};

export const webSiteSchema: SchemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Agencies by SHRI",
  url: "https://agencies.shri.org.in",
  description:
    "Strategic Creative Studio and Digital Presence & Growth Agency. Specializing in bespoke social media management, organic search authority (SEO), brand positioning, and web engineering.",
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(professionalServiceSchema),
      }}
    />
  );
}
