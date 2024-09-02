import { useSelector } from "react-redux";
import List from "./List";

const Categories = () => {
  const { isLoading, categories, error } = useSelector(
    (state) => state.categoriesReducer
  );

  return (
    <div className="container">
      <div>
        {/* Render the categories */}
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
