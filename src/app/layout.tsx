import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelvetvalet.com"),
  title: {
    default: "The Velvet Valet | Premium Valet Services",
    template: "%s | The Velvet Valet",
  },
  description: "Elevate Every Arrival with white-glove valet parking, traffic management, and concierge services for luxury events and venues.",
  keywords: [
    "Valet Parking Toronto",
    "GTA Valet Services",
    "Event Parking Ontario",
    "Luxury Valet Toronto",
    "Traffic Management GTA",
    "Concierge Services Toronto",
    "Wedding Valet Ontario",
    "Private Event Parking Toronto",
    "Corporate Valet Services",
  ],
  authors: [{ name: "The Velvet Valet", url: "https://thevelvetvalet.com" }],
  creator: "The Velvet Valet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thevelvetvalet.com",
    title: "The Velvet Valet | Premium Valet Services",
    description: "Elevate Every Arrival with Art Deco Luxury and White-Glove Service.",
    siteName: "The Velvet Valet",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists or create a placeholder task
        width: 1200,
        height: 630,
        alt: "The Velvet Valet - Premium Valet Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Velvet Valet | Premium Valet Services",
    description: "Elevate Every Arrival with Art Deco Luxury and White-Glove Service.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
