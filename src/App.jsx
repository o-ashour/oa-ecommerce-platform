import { useState } from "react";
import Shop from "./views/shop";
import About from "./views/about";
import Cart from "./views/cart";
import Header from "./components/Header";
import Home from "./views/home";
import Footer from "./components/Footer";
import json from "./data.json";

// TODO:
// Add remaining product images
// Replace placeholder text (i.e. lorem) with actual content 
// fix filter menus so click away closes them, and they aren't both open at once
// Decide about when to change product stock value: on 'Add to Cart' or 'checkout'
// Handle states for successful and unsuccessful checkouts (i.e. notify user)
// Rounding in subtotal in cart page should be
////// to nearest hundredth (i.e. cent)
// Handle empty cart state for cart view
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
// replace hero icons with local assets

const dummyCart = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "Shirts",
    price: 19.99,
    stock: 10,
    image: "",
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    category: "Pants",
    price: 49.99,
    stock: 8,
    image: "",
  },
  {
    id: 3,
    name: "Red Hoodie",
    category: "Sweaters",
    price: 39.99,
    stock: 7,
    image: "",
  },
];

export default function App() {
  const [view, setView] = useState("home");
  const [cartItems, setCartItems] = useState([]);

  const initialData = json || dummyCart;
  const [data, setData] = useState(initialData);

  let totalNItemsInCart = 0;

  // maybe try Array.prototype.reduce() here
  cartItems.forEach(item => totalNItemsInCart = totalNItemsInCart + item.qtyInCart);

  // console.log('data:', data, 'cart:', cartItems)

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div className="home-container">
        <Header setView={setView} totalNItemsInCart={totalNItemsInCart} />

        <div className="main-container">
          {view === "shop" ? (
            <Shop cartItems={cartItems} setCartItems={setCartItems} data={data} setData={setData} />
          ) : view === "about" ? (
            <About />
          ) : view === "cart" ? (
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              data={data}
              setData={setData}
              setView={setView}
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
