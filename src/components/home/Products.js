import { getProducts } from "@/store/products/productsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../shared/card";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  console.log("products -===>", products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="container">
      <div className="products">
        {products.map((product, index) => (
          <Card item={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
