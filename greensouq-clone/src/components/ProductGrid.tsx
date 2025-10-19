"use client";

import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  arabicTitle: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  productId: string;
}

export default function ProductGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products: ProductCardProps[] = [
    {
      productId: "1",
      title: "Money Tree Pachira Aquatica, Twisted Trunk 130 - 150cm 'الصبار'",
      arabicTitle: "",
      originalPrice: 50,
      discountedPrice: 35,
      imageUrl: "/prod1.webp",
    },
    {
      productId: "2",
      title: "Monstera Deliciosa The Hurricane or Swiss Cheese Plant Holland",
      arabicTitle: "",
      originalPrice: 60,
      discountedPrice: 45,
      imageUrl: "/prod2.webp",
    },
    {
      productId: "3",
      title: "Nephrolepis exaltata Green Lady, Boston Fern or Sword Fern 'نبتة الأفعى'",
      arabicTitle: "",
      originalPrice: 70,
      discountedPrice: 55,
      imageUrl: "/prod3.webp",
    },
    {
      productId: "4",
      title: "Peace Lily or Spathiphyllum or Money Plant Green Lady'نبتة المال'",
      arabicTitle: "",
      originalPrice: 80,
      discountedPrice: 65,
      imageUrl: "/prod4.webp",
    },
    {
      productId: "5",
      title: "Fiddle Leaf Fig Ravenala Madagascariensis Rim Pot 1.0 - 1.3m'تين الكمان'",
      arabicTitle: "",
      originalPrice: 90,
      discountedPrice: 75,
      imageUrl: "/img1.webp",
    },
     {
      productId: "6",
      title: "Fiddle Leaf Fig Ravenala Madagascariensis Rim Pot 1.0 - 1.3m'تين الكمان'",
      arabicTitle: "",
      originalPrice: 90,
      discountedPrice: 75,
      imageUrl: "/img1.webp",
    },
    
   
    {
      productId: "7",
      title: "Nephrolepis exaltata Green Lady, Boston Fern or Sword Fern 'نبتة الأفعى'",
      arabicTitle: "",
      originalPrice: 70,
      discountedPrice: 55,
      imageUrl: "/prod3.webp",
    },
    {
      productId: "8",
      title: "Peace Lily or Spathiphyllum or Money Plant Green Lady'نبتة المال'",
      arabicTitle: "",
      originalPrice: 80,
      discountedPrice: 65,
      imageUrl: "/prod4.webp",
    },
     {
      productId: "9",
      title: "Monstera Deliciosa The Hurricane or Swiss Cheese Plant Holland",
      arabicTitle: "",
      originalPrice: 60,
      discountedPrice: 45,
      imageUrl: "/prod2.webp",
    },
   {
      productId: "10",
      title: "Money Tree Pachira Aquatica, Twisted Trunk 130 - 150cm 'الصبار'",
      arabicTitle: "",
      originalPrice: 50,
      discountedPrice: 35,
      imageUrl: "/prod1.webp",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-gray-800 mb-5 text-center font-medium">
          Top Selling Indoor Plants
        </h2>

        {/* ✅ Independent height cards */}
        <div className="flex flex-wrap justify-center gap-6 items-start">
          {products.map((product, index) => (
            <Link
              key={product.productId}
              href={"/products"}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18%] bg-white shadow-md transition-all duration-300 overflow-hidden flex flex-col self-start ${
                hoveredIndex === index ? "shadow-lg scale-[1.02]" : ""
              }`}
            >
              {/* 🖼 Image */}
              <div className="overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500"
                  style={{
                    transform:
                      hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* 📝 Card Body */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-sm text-start text-gray-800 font-normal leading-snug mb-2">
                  {product.title}
                </h3>

                <div className="flex justify-start items-center space-x-2 mb-2">
                  <span className="text-xs line-through text-gray-400">
                    Dhs {product.originalPrice}.00
                  </span>
                  <span className="text-sm font-semibold text-gray-400">
                    Dhs {product.discountedPrice}.00
                  </span>
                </div>

                {/* ✅ Expanding content only for hovered card */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    hoveredIndex === index
                      ? "max-h-20 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    transitionProperty: "max-height, opacity, margin-top",
                  }}
                >
                  <div className="flex justify-center space-x-2">
                    <button className="border border-black text-black bg-transparent px-3 py-2 rounded text-xs hover:bg-black hover:text-white transition-colors duration-300">
                      Quick Shop
                    </button>
                    <button className="bg-black text-white px-3 py-2 rounded text-xs hover:bg-gray-800 transition-colors duration-300">
                      Choose Options
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}