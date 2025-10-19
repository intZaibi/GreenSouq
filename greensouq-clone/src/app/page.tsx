import ProductCards from "@/components/ProductCard";
import HeroSection from "../components/HeroSection";
import CategoryCards from "../components/CategoryCards";
import ProductGrid from "@/components/ProductGrid";
import NewsLetter from "@/components/NewsLetter";


export default function HomePage() {
  return (
    <main className="bg-white p-0">
      <HeroSection />
      <ProductCards />
      <CategoryCards />
      <ProductGrid />
      <NewsLetter />
    </main>
  );
}
