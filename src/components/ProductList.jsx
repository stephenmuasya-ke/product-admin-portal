import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;