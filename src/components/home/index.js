import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products.js";

const index = ({ categories }) => {
  return (
    <>
      <Slider />
      <Categories categories={categories} />
      <Products />
    </>
  );
};

export default index;
