import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "800"],
});

const SITE_URL = "https://primeinteriorsolutions.co.nz";
const SITE_NAME = "Prime Interior Solutions NZ";
const SITE_TITLE =
  "Prime Interior Solutions NZ | Plastering and Painting services in Auckland";
const SITE_DESCRIPTION =
  "Plastering & Painting trusted by Auckland homeowners. 9+ years in business. Level 5 plastering, GIB stopping, interior & exterior painting, and surface preparation. Free quotes available.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_NZ",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prime Interior Solutions NZ",
  description:
    "Plastering & Painting trusted by Auckland homeowners. 9+ years in business. Level 5 plastering, GIB stopping, interior & exterior painting, and surface preparation.",
  telephone: "+64210716861",
  email: "prime.interiornz@outlook.com",
  areaServed: {
    "@type": "City",
    name: "Auckland",
    "@id": "https://www.wikidata.org/wiki/Q37100",
  },
  sameAs: [
    "https://facebook.com/primeinteriorsolutionsnz",
    "https://instagram.com/prime.interior",
    "https://builderscrack.co.nz/tradies/1yfg6pr0/prime-interior-solutions",
    "https://www.nocowboys.co.nz/businesses/prime-interior-solutions-ltd",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
