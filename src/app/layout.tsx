import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { PROFILE } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://royjohairil.netlify.app"), // Replace with your Vercel or custom domain
  title: {
    default: `${PROFILE.name} — Full-Stack Software Engineer`,
    template: `%s | ${PROFILE.name}`,
  },
  description:
    "Full-Stack Software Engineer with 4+ years of experience building scalable web applications, automated payment gateways, and AI workflows.",
  keywords: [
    PROFILE.name,
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "AI Workflows",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: `${PROFILE.name} Portfolio`,
    title: `${PROFILE.name} — Full-Stack Software Engineer`,
    description:
      "Full-Stack Software Engineer building scalable web applications, automated payment systems, and AI workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} — Full-Stack Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — Full-Stack Software Engineer`,
    description:
      "Full-Stack Software Engineer building scalable web applications, automated payment systems, and AI workflows.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "article:published_time": "2026-11-19T00:00:00Z",
    date: "2026-11-19",
  },
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
    <body className="relative min-h-screen bg-[#0B0F19] font-sans text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
      {/* Soft top ambient blue/indigo light */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,#000_70%,transparent_100%)]" />


      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
    </body>


    </html>
  );
}

