import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "AngularToDoList - Spencer Yates",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "AngularToDoList - Spencer Yates",
    type: "website",
    title: "AngularToDoList - Spencer Yates",
    description: "The AngularToDoList is a simple to do list app built with Angular. The app was made to learn the basics of Angular.",
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