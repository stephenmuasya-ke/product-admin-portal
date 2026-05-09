import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>🥣 Cereal Shop</h2>

      <input
        type="text"
        placeholder="Search cereals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      {/* 👇 EMPTY STATE HANDLING */}
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p style={{ color: "gray", marginTop: "20px" }}>
          No cereals found matching!!! "{search}"
        </p>
      )}
    </div>
  );
}

export default ShopPage;