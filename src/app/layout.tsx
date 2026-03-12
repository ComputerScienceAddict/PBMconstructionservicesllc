import type { Metadata } from "next";
import { Bebas_Neue, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const libre = Libre_Baskerville({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PBM Construction Services LLC | Concrete, Hauling, Site Work",
  description:
    "Concrete, hauling, site work, finishing, resurface, trailer rentals. North Texas. 469-370-1920.",
  keywords: [
    "concrete",
    "hauling",
    "site work",
    "construction",
    "Texas",
    "trailer rentals",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebas.variable} ${libre.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
