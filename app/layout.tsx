import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PruvaLabs Pruva Assist",
  description: "AI-powered customer message automation platform for local businesses.",
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
