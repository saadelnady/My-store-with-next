import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./productCard.js";
import styles from "./styles/styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { getAllProducts } from "@/store/actions";
import { useRouter } from "next/router";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { FormattedMessage } from "react-intl";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, metadata, results } = useSelector(
    (state) => state.products
  );
  const { locale } = useRouter();
  const handlePageChange = (page) => {
    if (page >= 1 && page <= metadata.numberOfPages) {
      dispatch(getAllProducts({ cookies: {}, page, limit: 12 }));
    }
  };

  // -------------------------------------------------------------

  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="products" /> },
  ];
  // -------------------------------------------------------------
  return (
    <div className={styles.products}>
      <BreadCrumb items={items} />
      <Container>
        <Row>
          {products && products?.length > 0 ? (
            products.map((item, index) => (
              <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                <ProductCard product={item} />
              </Col>
            ))
          ) : (
            <p>No products available</p>
          )}
        </Row>
        {products.length > 0 && results > 10 && (
          <div className="pagination" dir={locale === "ar" ? "rtl" : "ltr"}>
            <button
              onClick={() => handlePageChange(metadata.currentPage - 1)}
              disabled={metadata.currentPage === 1}
            >
              &#10094;
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
              &#10095;
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsPage;
