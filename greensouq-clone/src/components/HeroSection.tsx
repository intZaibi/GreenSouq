"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* ✅ Large Screen Image */}
      <Image
        width={500}
        height={500}
        src="img1.webp"
        alt="Hero Large"
        className="hidden md:block w-full h-full object-cover"
      />

      {/* ✅ Small Screen Image */}
      <Image
        width={500}
        height={500}
        src="img2.webp"
        alt="Hero Small"
        className="md:hidden block w-full h-full object-cover"
      />
    </section>
  );
}
