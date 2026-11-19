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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="relative min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {/* Subtle dot grid */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_65%,transparent_100%)]" />
        {/* Top ambient emerald glow */}
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 mx-auto h-[340px] max-w-3xl bg-emerald-500/10 blur-[120px]" />

        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
      </body>

    </html>
  );
}

