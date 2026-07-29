import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.pruvalabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "PruvaLabs",
  title: {
    default: "PruvaLabs · PruvAI",
    template: "%s · PruvaLabs",
  },
  description:
    "PruvAI; kanıt, hafıza ve güvenlik katmanlarıyla geliştirilen PruvaLabs yapay zekâ platformudur.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: "PruvaLabs · PruvAI",
    description:
      "Sade arayüz, güçlü çekirdek ve doğrulanabilir yanıtlar için geliştirilen yapay zekâ.",
    url: siteUrl,
    siteName: "PruvaLabs",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/pruvai-social.png",
        width: 1200,
        height: 630,
        alt: "PruvAI · PruvaLabs yapay zekâsı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PruvaLabs · PruvAI",
    description:
      "Sade arayüz, güçlü çekirdek ve doğrulanabilir yanıtlar için geliştirilen yapay zekâ.",
    images: ["/pruvai-social.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PruvaLabs",
      alternateName: ["PruvaLAbs", "Pruva Labs"],
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/pruvalabs-logo.png`,
        contentUrl: `${siteUrl}/pruvalabs-logo.png`,
        width: 788,
        height: 694,
      },
      sameAs: [
        "https://www.instagram.com/pruvalabs",
        "https://twitter.com/pruvalabs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "PruvaLabs",
      alternateName: "Pruva Labs",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "tr-TR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
