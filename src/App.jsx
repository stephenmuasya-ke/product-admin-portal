import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;