import "./assets/styles/App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";

function App() {
  const [products, setProducts] = useState([]);

  console.log("rendered");
  return (
    <div className="App">
      <Nav
        setProducts={setProducts}
        products={products}
        quantity={products.length}
      />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop"
            element={<Shop products={products} setProducts={setProducts} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
