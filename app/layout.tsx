import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://salaarasim.dev";
const TITLE = "Salaar Asim — Software Engineer | Full Stack Developer";
const DESCRIPTION =
  "Salaar Asim is a Software Engineer and Full-Stack Developer in Lahore, Pakistan, building web applications, REST APIs, backend systems, and AI-powered features with JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Salaar Asim", "Software Engineer", "Full Stack Developer", "Backend Developer",
    "Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Lahore", "Pakistan",
  ],
  authors: [{ name: "Salaar Asim", url: SITE_URL }],
  creator: "Salaar Asim",
  alternates: { canonical: SITE_URL },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Salaar Asim",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/profile.jpg", alt: "Salaar Asim" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Salaar Asim",
      url: SITE_URL,
      image: `${SITE_URL}/profile.jpg`,
      jobTitle: "Software Engineer",
      description: DESCRIPTION,
      email: "mailto:salaarasim345@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "COMSATS University Islamabad — Lahore Campus",
      },
      knowsAbout: [
        "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
        "MongoDB", "PostgreSQL", "REST APIs", "Machine Learning",
      ],
      sameAs: ["https://github.com/Salaar052", "https://linkedin.com/in/salaar-asim"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Salaar Asim",
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
