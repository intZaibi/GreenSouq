"use client";
import Image from "next/image";
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
    <section className="bg-white py-16">
      <div className="mx-auto px-4 max-w-7xl">
        {/* Title */}
        <h2 className="mb-10 text-gray-800 text-2xl text-center">
          Top Categories this Week
        </h2>

        {/* Cards Grid */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Image */}
              <div className="shadow-md rounded-full w-70 h-70 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image
                  width={500}
                  height={500}
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-gray-700 group-hover:text-green-700 text-lg transition">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
