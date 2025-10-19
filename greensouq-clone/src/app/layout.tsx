import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SessionProviderWrapper from "@/providers/SessionProviderWrapper";
import LayoutWrapper from "@/components/LayoutWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenSouq Clone",
  description: "Next.js task project with NextAuth, Prisma, and Favorites page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <SessionProviderWrapper>
          {/* Client-side wrapper handles Navbar conditionally */}
          <LayoutWrapper>{children}</LayoutWrapper>

          <Toaster position="top-center" reverseOrder={false} />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}