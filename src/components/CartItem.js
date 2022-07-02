import "../assets/styles/CartItem.css";
import { useEffect, useState } from "react";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartItem({
  image,
  title,
  price,
  setProducts,
  id,
  quantityItem,
}) {
  const [quantity, setQuantity] = useState(quantityItem);

  function handleChange(event) {
    console.log("change");
    setQuantity(event.target.value);
  }

  useEffect(() => {
    setProducts((prevState) => {
      const newState = prevState.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: quantity };
        } else {
          return product;
        }
      });
      return newState;
    });
  }, [id, setProducts, quantity]);

  function increaseQuantity() {
    if (quantity < 5) {
      setQuantity((prevState) => prevState + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  }

  function removeProduct() {
    setProducts((prevState) => {
      const newState = prevState.filter((product) => {
        return product.id !== id;
      });
      return newState;
    });
  }

  return (
    <div className="cart-item">
      <img className="cart-item-img" alt={title} src={image}></img>
      <div className="cart-item-details">
        <h3>{title}</h3>
        <p>${price}</p>
        <span className="cart-product-quantity">
          <button
            className="cart-product-quantity-button"
            onClick={() => decreaseQuantity()}
          >
            -
          </button>
          <input
            className="cart-product-quantity-input"
            onChange={handleChange}
            min="1"
            value={quantity}
          ></input>
          <button
            className="cart-product-quantity-button"
            onClick={() => increaseQuantity()}
          >
            +
          </button>
          <button
            className="cart-product-quantity-button-delete"
            onClick={() => removeProduct()}
          >
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </button>
        </span>
      </div>
    </div>
  );
}
