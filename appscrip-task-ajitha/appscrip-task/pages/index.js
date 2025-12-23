import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Header />

      <main className="container">
        <div className="layout">
          <Filters />

          <section className="products">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}