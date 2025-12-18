import { useEffect, useState } from "react";
import Shop from "./views/shop";
import About from "./views/about";
import Cart from "./views/cart";
import Header from "./components/Header";
import Home from "./views/home";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { initializeCart } from "./cartSlice";

export default function App() {
  const [showToast, setShowToast] = useState(false);
  const { view } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function createCartSession() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
        method: "POST",
        credentials: "include",
      });
      return await response.json();
    }

    async function getCartFromSession() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
        credentials: "include",
      });
      if (response.status === 404) return await createCartSession();
      return await response.json();
    }

    async function initializeCartStateFromSession() {
      const cartSessionData = await getCartFromSession();
      dispatch(initializeCart(cartSessionData));
    }

    initializeCartStateFromSession();
  }, [dispatch]);

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
