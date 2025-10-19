"use client";
import Link from "next/link";

export default function CategoryCards() {
  const categories = [
    {
      id: 1,
      title: "Succulents",
      image: "/prod4.webp",
      link: "/products",
    },
    {
      id: 2,
      title: "Flowering Plants",
      image: "/prod5.jpg",
      link: "/products",
    },
    {
      id: 3,
      title: "Cactus",
      image: "/prod1.webp",
      link: "/products",
    },
    {
      id: 4,
      title: "Air Purifying",
      image: "/prod8.webp",
      link: "/products",
    },
     {
      id: 5,
      title: "Air Purifying",
      image: "/prod8.webp",
      link: "/products",
    },
        {
      id: 6,
      title: "Cactus",
      image: "/prod1.webp",
      link: "/products",
    },
    {
      id: 7,
      title: "Flowering Plants",
      image: "/prod5.jpg",
      link: "/products",
    },
    {
      id: 8,
      title: "Succulents",
      image: "/prod4.webp",
      link: "/products",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl text-center mb-10 text-gray-800">
          Top Categories this Week
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Image */}
              <div className="w-70 h-70 rounded-full overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-green-700 transition">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
