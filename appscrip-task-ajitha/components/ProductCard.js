export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={`Product image of ${product.title}`}
      />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
}