import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pruvalabs.com"),
  title: {
    default: "PruvaLabs",
    template: "%s · PruvaLabs",
  },
  description:
    "PruvaLabs; yapay zekâ, web, mobil ürünler ve güvenilir dijital altyapılar geliştiren teknoloji laboratuvarıdır.",
  openGraph: {
    title: "PruvaLabs",
    description:
      "Yapay zekâ, web, mobil ürünler ve güvenilir dijital altyapılar geliştiren teknoloji laboratuvarı.",
    url: "https://www.pruvalabs.com",
    siteName: "PruvaLabs",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PruvaLabs",
    description:
      "Yapay zekâ, web, mobil ürünler ve güvenilir dijital altyapılar geliştiren teknoloji laboratuvarı.",
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
