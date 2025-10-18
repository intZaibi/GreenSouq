import fs from "fs";
import path from "path";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

type Product = {
  id: number;
  slug: string;
  title: string;
  price: number;
  images: string[];
  description?: string;
};

interface ProductPageProps {
  product: Product;
}

export default function Product({ product }: ProductPageProps) {
  const { data: session } = useSession();

  async function addFavorite() {
    if (!session?.user) {
      alert("Please login");
      return;
    }
    try {
      await axios.post("/api/favorites", { title: product.title });
      alert("Saved to favorites");
    } catch {
      alert("Error saving");
    }
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="w-full h-96 relative">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button
            onClick={addFavorite}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save song (as example)
          </button>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const file = path.join(process.cwd(), "data", "products.json");
  const products: Product[] = JSON.parse(fs.readFileSync(file, "utf8"));
  const paths = products.map((p: Product) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const file = path.join(process.cwd(), "data", "products.json");
  const products: Product[] = JSON.parse(fs.readFileSync(file, "utf8"));
  const product = products.find(
    (p: Product) => p.slug === (params as { slug: string }).slug
  );
  return { props: { product } };
};
