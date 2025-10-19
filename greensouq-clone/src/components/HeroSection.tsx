"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* ✅ Large Screen Image */}
      <img
        src="img1.webp"
        alt="Hero Large"
        className="hidden md:block w-full h-full object-cover"
      />

      {/* ✅ Small Screen Image */}
      <img
        src="img2.webp"
        alt="Hero Small"
        className="block md:hidden w-full h-full object-cover"
      />
    </section>
  );
}
