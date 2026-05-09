import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Cereal World</h1>
      <p>We sell the freshest cereals from around the world.</p>

      <Link to="/shop">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to Shop
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;