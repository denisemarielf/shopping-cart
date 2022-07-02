import { useEffect, useState } from "react";
import Product from "./Product";
import "../assets/styles/Shop.css";

export default function Shop({ products, setProducts }) {
  const [productsFetched, setProductsFetched] = useState([]);
  const [category, setCategory] = useState("skincare")

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/"+category)
      .then((response) => response.json())
      .then((data) => setProductsFetched(data.products));
  }, [category]);

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

  return (
    <section className="shop">
        <nav className="shop-nav">
              <h3>Category</h3>
                <ul className="shop-nav-ul">
                  <li onClick={() => setCategory("skincare")}>skincare</li>
                  <li onClick={() => setCategory("fragrances")}>fragrances</li>
                  <li onClick={() => setCategory("sunglasses")}>sunglasses</li>
                  <li onClick={() => setCategory("womens-watches")}>watches</li>
                  <li onClick={() => setCategory("womens-bags")}>bags</li>
                </ul>
            </nav>
            <section className="shop-product-container">
              {productsDisplay}
            </section>
    </section>
  )
  
  
  
  
  
}
