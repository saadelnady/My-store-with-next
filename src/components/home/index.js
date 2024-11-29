import Slider from "./Slider";
import Categories from "./Categories";
import Brands from "./Brands";
import Products from "./Products.js";
import styles from "./styles/styles.module.scss";
const index = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <Categories />
      <Products />
      <Brands />
    </div>
  );
};

export default index;
