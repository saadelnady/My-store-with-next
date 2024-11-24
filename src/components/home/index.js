import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products.js";
import styles from "./styles/styles.module.scss";
const index = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default index;
