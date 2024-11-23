import { useSelector } from "react-redux";
import List from "./List";
import { Container } from "react-bootstrap";

const Categories = () => {
  const { categories, error } = useSelector((state) => state.categories);

  return (
    <Container>
      {categories && categories.length > 0 && <List data={categories} />}
    </Container>
  );
};

export default Categories;
