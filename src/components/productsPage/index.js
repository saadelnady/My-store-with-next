import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./productCard";
import styles from "./styles/styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { getAllProducts } from "@/store/actions";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, metadata, results } = useSelector(
    (state) => state.products
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= metadata.numberOfPages) {
      dispatch(getAllProducts({ cookies: {}, page, limit: results }));
    }
  };
  return (
    <div className={styles.products}>
      <Container>
        <Row>
          {products && products.length > 0 ? (
            products.map((item, index) => (
              <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                <ProductCard product={item} />
              </Col>
            ))
          ) : (
            <p>No products available</p>
          )}
        </Row>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(metadata.currentPage - 1)}
            disabled={metadata.currentPage === 1}
          >
            Previous
          </button>
          {[...Array(metadata.numberOfPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={metadata.currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(metadata.currentPage + 1)}
            disabled={metadata.currentPage === metadata.numberOfPages}
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
