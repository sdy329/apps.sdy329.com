import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "SpoilerGuard - Spencer Yates",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "SpoilerGuard - Spencer Yates",
    type: "website",
    title: "SpoilerGuard - Spencer Yates",
    description: "SpoilerGuard is A cross-platform wiki application that allows users to browse articles of their favorite media without fear of spoilers.",
    url: "https://apps.sdy329.com"
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