import { useSelector } from "react-redux";
import List from "./List";

const Categories = ({ categories }) => {
  // const { isLoading, categories, error } = useSelector(
  //   (state) => state.categoriesReducer
  // );

  return (
    <div className="container">
      <div>
        {categories && categories.length > 0 ? (
          <List data={categories} />
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
