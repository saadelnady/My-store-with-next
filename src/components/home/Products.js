import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../shared/card";
import { Container } from "react-bootstrap";

const Products = () => {
  return (
    <Container>
      <div className="row">
        {[].map((product, index) => (
          <Card item={product} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
