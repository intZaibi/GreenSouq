"use client";

import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = [
    {
      productId: "1",
      title: "Aloe Vera",
      arabicTitle: "الصبار",
      originalPrice: 50,
      discountedPrice: 35,
      imageUrl: "/aloe.webp",
    },
    {
      productId: "2",
      title: "Peace Lily",
      arabicTitle: "زهرة السلام",
      originalPrice: 60,
      discountedPrice: 45,
      imageUrl: "/peace-lily.webp",
    },
    {
      productId: "3",
      title: "Snake Plant",
      arabicTitle: "نبتة الأفعى",
      originalPrice: 70,
      discountedPrice: 55,
      imageUrl: "/snake-plant.webp",
    },
    {
      productId: "4",
      title: "Money Plant",
      arabicTitle: "نبتة المال",
      originalPrice: 80,
      discountedPrice: 65,
      imageUrl: "/money-plant.webp",
    },
    {
      productId: "5",
      title: "Fiddle Leaf Fig",
      arabicTitle: "تين الكمان",
      originalPrice: 90,
      discountedPrice: 75,
      imageUrl: "/fiddle-leaf.webp",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Products
        </h2>

        {/* ✅ Responsive Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5 
            gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
