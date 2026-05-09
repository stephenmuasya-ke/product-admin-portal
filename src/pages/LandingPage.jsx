import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{
      textAlign: "center",
      padding: "60px",
      background: "linear-gradient(to right, #74ebd5, #acb6e5)",
      minHeight: "80vh"
    }}>
      <h1>UTAMU TELE CEREAL SHOP</h1>
      <p>WE GIVE YOU THE BEST CEREALS THAT YOU LOVE.</p>

      <Link to="/shop">
        <button style={{
          marginTop: "20px",
          background: "#2c3e50",
          color: "white",
          padding: "10px 20px"
        }}>
          Go to Shop 🛒
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;