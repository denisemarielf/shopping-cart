import CartItem from "./CartItem";
import { useState, useEffect } from "react";

export default function Cart({ products, setIsDisplayed, setProducts }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initialValue = 0;
    const numeros = products.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      initialValue
    );
    setTotal(numeros);
  }, [products]);

  const CartItems = products.map((item) => {
    return (
      <CartItem
        quantityItem={item.quantity}
        setProducts={setProducts}
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
      ></CartItem>
    );
  });

  return (
    <section className="cart">
      <div className="cart-container">
        <h3>Your cart</h3>
        {products.length > 0 && (
          <>
            <div className="cart-items-container">{CartItems}</div>
            <div className="cart-details">
              <span>Total: ${total}</span>
              <div className="cart-details-buttons">
                <button className="cart-button">Checkout</button>
                <button
                  className="cart-button"
                  onClick={() => setIsDisplayed((prevState) => !prevState)}
                >
                  Go back
                </button>
              </div>
            </div>
          </>
        )}
        {products.length === 0 && (
          <>
            <span>There are no products added to the cart</span>
            <button
              className="cart-button"
              onClick={() => setIsDisplayed((prevState) => !prevState)}
            >
              Go back
            </button>
          </>
        )}
      </div>
    </section>
  );
}
