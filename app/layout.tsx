import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: Update title and description once final content is ready
  title: "The Round Table | SAMAHAN Educational Hub — ADDU",
  description:
    "A Student Government Educational Hub for Ateneo de Davao University. Learn about SAMAHAN positions, the history of student governments in the Philippines, and why your participation matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
