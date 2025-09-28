import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Shoabur Rahman Chishty - Full-Stack Developer & AI/ML Engineer",
  description:
    "Professional portfolio showcasing expertise in backend development, AI/ML, automation, cloud computing, system administration, and computer networks.",
  keywords: [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Backend Development",
    "Cloud Computing",
    "Automation",
    "System Administration",
  ],
  authors: [{ name: "Shoabur Rahman Chishty" }],
  openGraph: {
    title: "Shoabur Rahman Chishty - Full-Stack Developer & AI/ML Engineer",
    description:
      "Professional portfolio showcasing expertise in backend development, AI/ML, automation, cloud computing, system administration, and computer networks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
