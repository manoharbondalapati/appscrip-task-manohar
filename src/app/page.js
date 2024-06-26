import styles from "./page.module.css";
import ProductsSection from "@/components/products/ProductsSection";
import HeadSection from "@/components/headSection/HeadSection";

export default function Home() {
  return (
    <main className={`${styles.main} mainDiv`} >
      <HeadSection />
      <ProductsSection />
    </main>
  );
}
