import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://leilahariri.ae";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Leila Hariri — Holistic & Aesthetic Dentist Dubai | DHA Licensed",
    template: "%s | Dr. Leila Hariri Dental Clinic",
  },
  description:
    "Dubai's leading holistic dentist. DHA Licensed, board-certified, 15+ years experience. Specialising in biological dentistry, Invisalign, composite bonding, and TMJ treatment. Book your consultation today.",
  keywords: [
    "holistic dentist Dubai",
    "biological dentistry Dubai",
    "holistic dental clinic Dubai",
    "DHA licensed dentist Dubai",
    "aesthetic dentist Dubai",
    "Invisalign Dubai",
    "composite bonding Dubai",
    "TMJ treatment Dubai",
    "holistic teeth whitening Dubai",
    "mercury-free dentist Dubai",
    "BPA-free dental materials Dubai",
    "Business Bay dentist",
    "luxury dentist Dubai",
  ],
  authors: [{ name: "Dr. Leila Hariri" }],
  creator: "Dr. Leila Hariri Dental Clinic",
  publisher: "Dr. Leila Hariri Dental Clinic",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Dr. Leila Hariri Dental Clinic",
    title: "Dr. Leila Hariri — Holistic & Aesthetic Dentist Dubai",
    description:
      "Dubai's leading holistic dentist. DHA Licensed, 15+ years experience. Biological dentistry, Invisalign, composite bonding & TMJ treatment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Leila Hariri Dental Clinic — Holistic Dentistry Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Leila Hariri — Holistic & Aesthetic Dentist Dubai",
    description:
      "Dubai's leading holistic dentist. DHA Licensed, 15+ years experience. Biological dentistry, Invisalign, composite bonding & TMJ treatment.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_PLACEHOLDER",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Dentist"],
      "@id": `${siteUrl}/#organization`,
      name: "Dr. Leila Hariri Dental Clinic",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Holistic and aesthetic dental clinic in Dubai. DHA Licensed. Specialising in biological dentistry, Invisalign, composite bonding, teeth whitening and TMJ treatment.",
      telephone: "+97142000000",
      email: "hello@leilahariri.ae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Business Bay, Bay Square Building 5, Office 301",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        postalCode: "00000",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1865,
        longitude: 55.2553,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      priceRange: "AED 300 – AED 8,000",
      currenciesAccepted: "AED",
      paymentAccepted: "Cash, Credit Card, Insurance",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://www.instagram.com/drleila.dental",
        "https://wa.me/971585324519",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#doctor`,
      name: "Dr. Leila Hariri",
      jobTitle: "Holistic & Aesthetic Dentist",
      worksFor: { "@id": `${siteUrl}/#organization` },
      description:
        "DHA Licensed holistic dentist with 15+ years of experience in Dubai. Pioneer of biological dentistry in the UAE.",
      url: `${siteUrl}/#doctor`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 - replace G-PLACEHOLDER with real measurement ID */}
      </head>
      <body className="font-sans antialiased">
        {children}
        {/* GA4 — replace G-PLACEHOLDER with real measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </body>
    </html>
  );
}
