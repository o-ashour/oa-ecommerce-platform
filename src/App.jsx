import { useState } from "react";
import Shop from "./views/shop";
import About from "./views/about";
import Cart from "./views/cart";
import Header from "./components/Header";
import Home from "./views/home";
import Footer from "./components/Footer";
import json from "./data.json";
import Toast from "./components/Toast";

// TODO:

/////////////// ALWAYS ///////////////////////////
// Clean Code

///////////////////// IMPORTANT ///////////////////////////
// When two sort menus are open they overlap, make more distinguishable, or have one
//////collapse
// Handle state where search yields no results in shop (i.e. 'could not find x' screen)
// Add Feat to remove items incrementally from cart (numeric, arrows, etc)
// Handle states for successful and unsuccessful checkouts (i.e. notify user)
// Add remaining product images
// Replace placeholder text (i.e. lorem) with actual content
// Handle empty cart state for cart view
// Check List items are properly indexed in loops

/////////////////////// Less Important ///////////////////////////////
// Decide about when to change product stock value: on 'Add to Cart' or 'checkout'
// Improve About page
// Check extra padding on container/wrapper
///// components on small size
// Check font size and responsiveness on product
////// item headers in cart page
// letter-spacing variable
// unify values : i.e. all pixels, or all em/rem, or all variables in css
// switch out oklch with hsl
// replace hero icons with local assets

export default function App() {
  const [view, setView] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [totalNItemsInCart, setTotalNItemsInCart] = useState(0);
  const initialData = json;
  const [data, setData] = useState(initialData);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Toast showToast={showToast} />
      <div className="home-container">
        <Header setView={setView} totalNItemsInCart={totalNItemsInCart} />
        <div className="main-container">
          {view === "shop" ? (
            <Shop
              cartItems={cartItems}
              setCartItems={setCartItems}
              data={data}
              setData={setData}
              setShowToast={setShowToast}
              showToast={showToast}
              setTotalNItemsInCart={setTotalNItemsInCart}
            />
          ) : view === "about" ? (
            <About />
          ) : view === "cart" ? (
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              data={data}
              setData={setData}
              setView={setView}
              setTotalNItemsInCart={setTotalNItemsInCart}
            />
          ) : (
            <Home setView={setView} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
