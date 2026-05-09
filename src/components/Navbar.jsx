import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#2c3e50",
      color: "white"
    }}>
      <h3>Cereal Admin</h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link style={{ color: "white" }} to="/">Home</Link>
        <Link style={{ color: "white" }} to="/shop">Shop</Link>
        <Link style={{ color: "white" }} to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;