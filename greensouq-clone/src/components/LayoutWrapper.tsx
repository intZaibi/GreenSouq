// src/components/LayoutWrapper.tsx
"use client"; // ✅ must be at the top

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname?.startsWith("/auth"); // hide navbar on auth pages

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
