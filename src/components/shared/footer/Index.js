import googleplaylogo from "./assets/googleplay-logo.png";
import applestorelogo from "./assets/apple-store.png";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./styles/styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "./assets/logo.png";
import CustomHeading from "../customHeading/CustomHeading";
import IcSend from "./assets/ic-send.svg";
import { useForm } from "react-hook-form";
const Footer = () => {
  const intl = useIntl();
  const { asPath } = useRouter();

  const isCurrentPath = (path) => asPath === path;

  const { locale } = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
              {/* <p className="payment-partners">
                <FormattedMessage id="paymentPartners" />
              </p> */}
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
            </Col>
            <Col xs={6} md={1}>
              <h2>
                <FormattedMessage id="links" />
              </h2>
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
            <Col xs={6} md={4}>
              <h2>
                <FormattedMessage id="getOurApp" />
              </h2>
              <p>
                <FormattedMessage id="getAppMessage" />
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  id="email"
                  placeholder={intl.formatMessage({ id: "email-placeholder" })}
                  {...register("email", {
                    required: intl.formatMessage({ id: "required" }),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: intl.formatMessage({ id: "invalidEmail" }),
                    },
                  })}
                />

                <button type="submit">
                  <IcSend alt="Send" />
                </button>
              </form>
              {errors?.email?.message && (
                <p className="error">{errors?.email?.message}</p>
              )}
            </Col>
          </Row>
        </div>
        <div className="bottom">
          {/* <div className="imgs">
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
          </div> */}

          <p className="copyright">{intl.formatMessage({ id: "copyright" })}</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
