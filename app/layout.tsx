import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pruvalabs.com"),
  title: {
    default: "PruvaLabs · PruvAI",
    template: "%s · PruvaLabs",
  },
  description:
    "PruvAI; kanıt, hafıza ve güvenlik katmanlarıyla geliştirilen PruvaLabs yapay zekâ platformudur.",
  openGraph: {
    title: "PruvaLabs · PruvAI",
    description:
      "Sade arayüz, güçlü çekirdek ve doğrulanabilir yanıtlar için geliştirilen yapay zekâ.",
    url: "https://pruvalabs.com",
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
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
