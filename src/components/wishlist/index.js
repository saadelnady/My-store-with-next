import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import ProductCard from "./productCard";
import styles from "./styles/styles.module.scss";

const WishList = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="wishlist" /> },
  ];
  return (
    <div className={styles.wishlist}>
      <BreadCrumb items={items} />
      <Container>
        <Row>
          {wishlist && wishlist?.length > 0 ? (
            wishlist?.map((product) => {
              return (
                <Col xs={12} sm={6} md={6} lg={3} key={product._id}>
                  <ProductCard product={product} />
                </Col>
              );
            })
          ) : (
            <p className="text-center">
              <FormattedMessage id="no-data" />
            </p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default WishList;
