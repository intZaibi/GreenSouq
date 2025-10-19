"use client";
import Link from "next/link";

export default function ProductCards() {
  const products = [
    {
      id: 1,
      title: "Indoor Plants",
      image: "/prod1.webp",
      link: "/products",
    },
    {
      id: 2,
      title: "Outdoor Plants",
      image: "/prod2.webp",
      link: "/products",
    },
    {
      id: 3,
      title: "Pots & Planters",
      image: "/prod3.webp",
      link: "/products",
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {products.map((product) => (
            <Link
              href={product.link}
              key={product.id}
              className="relative group  overflow-hidden shadow-md cursor-pointer h-96"
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-40 transition duration-300"></div>

              {/* Title & Button */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {product.title}
                </h3>
                <button className="bg-black text-white px-4 py-3 text-sm rounded hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
