import { useState } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import NavDialog from "./Dialog";
import styles from "./style.module.css";

const navigation = [
  { name: "Home", viewName: "home" },
  { name: "Shop", viewName: "shop" },
  { name: "About", viewName: "about" },
];

function Nav({ setView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      <nav>
        <div className={styles.hamburgerIconWrapper}>
          <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <HamburgerIcon />
          </button>
        </div>
        <div className={styles.mainNavWrapper}>
          <div className={styles.logoWrapper}>
            {/* does this need to be a button and link to home ? */}
            {/* there is already a home item in nav menu */}
            <button onClick={() => setView("home")}>O&A</button>
          </div>
          <div className={styles.menuLarge}>
            {navigation.map((item) => (
              <button key={item.name} onClick={() => setView(item.viewName)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.cartIconWrapper}>
          <button onClick={() => setView("cart")}>
            <ShoppingBagIcon />
          </button>
          <span>0</span>
        </div>
      </nav>
      <NavDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setView={setView}
        navigation={navigation}
      />
    </div>
  );
}

export default Nav;
