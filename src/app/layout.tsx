import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "800"],
});

// TODO: update when custom domain is live
const SITE_URL = "https://prime-interior-solutions-nz.vercel.app";
const SITE_NAME = "Prime Interior Solutions NZ";
const SITE_TITLE =
  "Prime Interior Solutions NZ | Plasterer and Painter in Auckland";
const SITE_DESCRIPTION =
  "Trusted plasterer and painter serving Auckland homeowners. Specialising in Level 5 plastering, GIB stopping, interior & exterior painting, and surface preparation. 9+ years experience. Get a free quote.";

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
    "Trusted plasterer and painter serving Auckland homeowners. Specialising in Level 5 plastering, GIB stopping, interior & exterior painting, and surface preparation.",
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
