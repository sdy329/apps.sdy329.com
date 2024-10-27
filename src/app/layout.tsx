import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "Apps - Spencer Yates",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "Apps - Spencer Yates",
    type: "website",
    title: "Apps - Spencer Yates",
    description: "A collection of apps by Spencer Yates",
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
