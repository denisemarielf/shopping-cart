import { useEffect, useState } from "react";
import Product from "./Product";
import "../assets/styles/Shop.css";

export default function Shop({ products, setProducts }) {
  const [productsFetched, setProductsFetched] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/skincare")
      .then((response) => response.json())
      .then((data) => setProductsFetched(data.products));
  }, []);

  const productsDisplay = productsFetched.map((product) => {
    return (
      <Product
        setProducts={setProducts}
        key={product.id}
        image={product.images[1]}
        title={product.title}
        price={product.price}
        id={product.id}
      />
    );
  });

  return <section className="product-container">{productsDisplay}</section>;
}
