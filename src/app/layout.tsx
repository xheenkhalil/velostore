import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VELO | Next-Gen E-Commerce",
  description: "Experience the future of shopping with Velo. A spatial, headless e-commerce store built with Next.js.",
  keywords: ["ecommerce", "nextjs", "react", "shopping", "spatial design", "modern web"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
