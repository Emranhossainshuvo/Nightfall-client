import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLodaing] = useState(true);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLodaing(false)
    });
  }, []);
  return [products, loading];
};

export default useProducts;
