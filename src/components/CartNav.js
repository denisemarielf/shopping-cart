import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartNav({ quantity, setIsDisplayed }) {
  return (
    <li
      className="shopping-cart-container"
      onClick={() => setIsDisplayed((prevState) => !prevState)}
    >
      <FontAwesomeIcon className="shopping-cart-icon" icon={faShoppingCart} />
      <span className="shopping-cart-quantity">{quantity}</span>
    </li>
  );
}
