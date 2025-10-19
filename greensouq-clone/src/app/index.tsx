// pages/index.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  slug: string;
  title: string;
  price: number;
  images: string;
  description?: string;
};

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      <nav className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="font-bold">Greensouq Clone</h1>
        <div className="space-x-3">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/favorites">Favorites</Link>
        </div>
      </nav>

      <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="border p-4 rounded">
              <Link href={`/product/${p.slug}`}>
                <a>
                  <div className="w-full h-48 relative">
                    <Image src={p.images[0]} alt={p.title} fill style={{ objectFit: 'contain' }}/>
                  </div>
                  <h2 className="mt-3 font-semibold">{p.title}</h2>
                  <p className="mt-1 text-lg font-bold">${p.price}</p>
                </a>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), "data", "products.json");
  const products = JSON.parse(fs.readFileSync(file, "utf8"));
  return { props: { products } };
}
