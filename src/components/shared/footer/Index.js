import googleplaylogo from "public/images/googleplay-logo.png";
import applestorelogo from "public/images/apple-store.png";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./styles/styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "./assets/logo.png";
import CustomHeading from "../customHeading/CustomHeading";
const Footer = () => {
  const intl = useIntl();
  const { asPath } = useRouter();

  const isCurrentPath = (path) => asPath === path;
  return (
    <div className={styles.footer}>
      <Container>
        <div className="top">
          <Row className="justify-content-between">
            <Col xs={12} md={3} xl={2} className="align-self-center">
              <div className="img">
                <Link href={"/"}>
                  <a>
                    <Image src={logo} alt="Logo" className="logo" />
                  </a>
                </Link>
              </div>
            </Col>
            <Col xs={6} md={1}>
              <CustomHeading title={<FormattedMessage id="links" />} />
              <ul className="links">
                <li>
                  <Link href="/">
                    <a className={isCurrentPath("/") ? "active" : ""}>
                      <FormattedMessage id="home" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a className={isCurrentPath("/products") ? "active" : ""}>
                      <FormattedMessage id="products" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/brands">
                    <a className={isCurrentPath("/brands") ? "active" : ""}>
                      <FormattedMessage id="brands" />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/categories">
                    <a className={isCurrentPath("/categories") ? "active" : ""}>
                      <FormattedMessage id="categories" />
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6}>
              <CustomHeading title={<FormattedMessage id="getOurApp" />} />

              <p>
                <FormattedMessage id="getAppMessage" />
              </p>
              <input
                type="email"
                placeholder={`${intl.formatMessage({ id: "email" })}...`}
                className="input"
              />
              <button className="btn">
                <FormattedMessage id="subscribe" />
              </button>
            </Col>
          </Row>
        </div>
        <div className="bottom">
          <p>
            {" "}
            <FormattedMessage id="paymentPartners" />
          </p>
          <ul className="icons">
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-tiktok"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-linkedin"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
          </ul>
          <div className="imgs">
            <p>Get Deliveries</p>
            <Image
              src={googleplaylogo}
              alt={"googleplaylogo"}
              className="store"
            />
            <Image
              src={applestorelogo}
              alt={"applestorelogo"}
              className="store"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
