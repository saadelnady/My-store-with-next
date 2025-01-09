import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { FormattedMessage } from "react-intl";
import Image from "next/future/image";
import styles from "./styles/styles.module.scss";
import Link from "next/link";
const Brands = () => {
  const { brands } = useSelector((state) => state.brands);
   const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="brands" /> },
  ];
  const renderBrands = () => {
    if (brands && brands?.length > 0) {
      return brands?.map((brand, index) => (
        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
          <Link href={`/brands/${brand?._id}`}>
            <a>
              <div className="brand">
                <div className="brand-img">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={1024}
                    height={1080}
                    priority
                  />
                </div>
              </div>
            </a>
          </Link>
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
    <div className={styles.brands}>
      <Container>
        <BreadCrumb items={items} />
        <Row>{renderBrands()}</Row>
      </Container>
    </div>
  );
};

export default Brands;
