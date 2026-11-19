import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Software Engineer",
  description:
    "Full-Stack Developer with 4 years of experience building scalable web applications, automated payment systems, and AI workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300`}
      >
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
