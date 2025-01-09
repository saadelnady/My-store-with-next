import React from "react";
import styles from "./styles/styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import Image from "next/future/image";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="categories" /> },
  ];
  const renderCategories = () => {
    if (categories && categories?.length > 0) {
      return categories?.map((category, index) => (
        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
          <div className="category">
            <div className="category-img">
              <Image
                src={category.image}
                alt={category.name}
                width={1024}
                height={1080}
                priority
              />
            </div>
            <h4 className="category-name">{category.name}</h4>
          </div>
        </Col>
      ));
    }
    return (
      <p className="text-center">
        <FormattedMessage id="no-data" />
      </p>
    );
  };
  return (
    <div className={styles.categories}>
      <Container>
        <BreadCrumb items={items} />
        <Row>{renderCategories()}</Row>
      </Container>
    </div>
  );
};

export default Categories;
