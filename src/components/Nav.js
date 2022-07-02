import "../assets/styles/Nav.css";
import CartNav from "./CartNav";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

export default function Nav({ products, quantity, setProducts }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-title">
        <h1>THE BOUTIQUE</h1>
        <small>online store</small>
      </div>
      <ul className="nav-ul">
        <li>
          <Link to="/shopping-cart">home</Link>
        </li>
        <li>
          <Link to="/shopping-cart/shop">shop</Link>
        </li>
        <CartNav setIsDisplayed={setIsDisplayed} quantity={quantity} />
      </ul>
      {isDisplayed && (
        <Cart
          setProducts={setProducts}
          setIsDisplayed={setIsDisplayed}
          products={products}
        />
      )}
    </nav>
  );
}
