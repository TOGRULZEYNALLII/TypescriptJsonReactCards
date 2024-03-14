import Card from "./components/card/card.tsx";
import "./App.css";
import { useEffect, useState } from "react";
import ProductCard from "./components/card/card.tsx";
import { Input } from "@chakra-ui/react";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <container className="Container">
        <Card />
      </container>
      <Input
        onKeyUp={(e) => setSearch(e.target.value)}
        m={3}
        placeholder="Search product"
      />
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </>
  );
}

export default App;
