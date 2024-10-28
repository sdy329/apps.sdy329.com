import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "EcoTrack - Spencer Yates",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "EcoTrack - Spencer Yates",
    type: "website",
    title: "EcoTrack - Spencer Yates",
    description: "EcoTrack is a web forum for discussing environmental issues and tracking progress on environmental initiatives.",
    url: "https://apps.sdy329.com/EcoTrack"
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