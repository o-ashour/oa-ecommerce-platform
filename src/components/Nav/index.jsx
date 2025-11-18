import { useState } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import NavDialog from "./Dialog";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../viewSlice";
import { getTotalNCartItems } from "../../utils";

const navigation = [
  { name: "Home", viewName: "home" },
  { name: "Shop", viewName: "shop" },
  { name: "About", viewName: "about" },
];

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalNCartItems = getTotalNCartItems(cart);

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
            <button onClick={() => dispatch(changeView("home"))}>O&A</button>
          </div>
          <div className={styles.menuLarge}>
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => dispatch(changeView(item.viewName))}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.cartIconWrapper}>
          <button onClick={() => dispatch(changeView("cart"))}>
            <ShoppingBagIcon />
          </button>
          <span>{totalNCartItems}</span>
        </div>
      </nav>
      <NavDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </div>
  );
}

export default Nav;
