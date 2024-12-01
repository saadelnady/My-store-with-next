import { useSelector } from "react-redux";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ProductComponent = () => {
  const { product } = useSelector((state) => state.products);

  const items = [
    <FormattedMessage id="home" />,
    <FormattedMessage id="products" />,
    product?.title,
  ];
  return (
    <Container>
      <div className="product-page">
        <BreadCrumb items={items} />
      </div>
    </Container>
  );
};

export default ProductComponent;
