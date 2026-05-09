function ProductCard({ product }) {
  return (
    <div style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      width: "200px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>🌍 {product.origin}</p>
      <h4>💰 KES {product.price}</h4>
    </div>
  );
}

export default ProductCard;