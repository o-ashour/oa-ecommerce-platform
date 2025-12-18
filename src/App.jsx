import { useState } from "react";
import Shop from "./views/shop";
import About from "./views/about";
import Cart from "./views/cart";
import Header from "./components/Header";
import Home from "./views/home";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useSelector } from "react-redux";

export default function App() {
  const [showToast, setShowToast] = useState(false);
  const { view } = useSelector((state) => state);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Toast showToast={showToast} />
      <div className="home-container">
        <Header />
        <div className="main-container">
          {view === "shop" ? (
            <Shop setShowToast={setShowToast} showToast={showToast} />
          ) : view === "about" ? (
            <About />
          ) : view === "cart" ? (
            <Cart />
          ) : (
            <Home />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
