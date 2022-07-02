import "../assets/styles/Product.css";
import { useState } from "react";

export default function Product({ image, title, price, id, setProducts }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function addProduct() {
    setAddedToCart(true);
    setProducts((prevState) => {
      return [
        ...prevState,
        { image: image, title: title, price: price, quantity: 1, id: id },
      ];
    });
  }

  function removeProduct() {
    setAddedToCart(false);
    setProducts((prevState) => {
      const newState = prevState.filter((product) => {
        return product.id !== id;
      });
      return newState;
    });
  }

  return (
    <div className="product-container-item">
      <img
        className="product-container-item-image"
        alt={title}
        src={image}
      ></img>
      <h3 className="product-container-item-title"> {title}</h3>
      <p className="product-container-item-price"> ${price}</p>
      {addedToCart ? (
        <button
          onClick={() => removeProduct()}
          className="product-container-item-button"
        >
          Delete
        </button>
      ) : (
        <button
          onClick={() => addProduct()}
          className="product-container-item-button"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
