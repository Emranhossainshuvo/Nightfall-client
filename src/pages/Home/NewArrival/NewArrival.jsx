// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductItem from "../../shared/ProductItem/ProductItem";
import useProducts from "../../../Hooks/useProducts";

const NewArrival = () => {
  const [products] = useProducts(); 
  const newArrivals = products.filter(item => item.category === 'newArrival')
  return (
    <>
      <SectionTitle heading="NEW ARRIVAL"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newArrivals.map((item) => (
          <ProductItem key={item._id} item={item}></ProductItem>
        ))}
      </div>
    </>
  );
};

export default NewArrival;
