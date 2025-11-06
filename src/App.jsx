import { useState } from "react";
import Shop from "./views/shop";
import About from "./views/about";
import Cart from "./views/cart";
import Header from "./components/Header";
import Home from "./views/home";
import Footer from "./components/Footer";

// TODO:
// Get feedback
// Improve About page
// Check extra padding on container/wrapper
///// components on small size
// Check List items are properly indexed in loops
// Check font size and responsiveness on product
////// item headers in cart page
// letter-spacing variable
// unify values : i.e. all pixels, or all em/rem, or all variables in css
// switch out oklch with hsl
// get rest of product images for shop
// replace hero icons with local assets

export default function App() {
  const [view, setView] = useState("home");

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div className="home-container">
        <Header setView={setView} />

        <div className="main-container">
          {view === "shop" ? (
            <Shop />
          ) : view === "about" ? (
            <About />
          ) : view === "cart" ? (
            <Cart />
          ) : (
            <Home setView={setView} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
