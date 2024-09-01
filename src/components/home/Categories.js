import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { useEffect } from "react";
import { getCategories } from "@/store/categories/categoriesActions";

const Categories = () => {
  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector(
    (state) => state.categoriesReducer
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="container">
      <List data={categories} />
    </div>
  );
};

export default Categories;
