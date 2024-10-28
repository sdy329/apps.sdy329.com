import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "Cross Platform Calculator - Spencer Yates",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "Cross Platform Calculator - Spencer Yates",
    type: "website",
    title: "Cross Platform Calculator - Spencer Yates",
    description: "A cross-platform calculator app that can be used on any device.",
    url: "https://apps.sdy329.com/Cross-Platform-Calculator"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}