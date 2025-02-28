import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postCheckout } from "@/store/actions";
import { useRouter } from "next/router";
const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const intl = useIntl();
  const { formatMessage } = intl;

  const onSubmit = (formData) => {
    const checkoutData = { shippingAddress: formData };
    const cartId = cart?._id;
    dispatch(postCheckout({ data: checkoutData, cartId, router, cookies: {} }));
  };
  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="checkout" /> },
  ];
  return (
    <div className={styles.checkout}>
      <BreadCrumb items={items} />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <Col xs={12}>
                {/* Phone */}
                <div className="inner">
                  <label htmlFor="phone">
                    <FormattedMessage id="phone" />:
                  </label>
                  <input
                    id="phone"
                    type="text"
                    {...register("phone", {
                      required: formatMessage({ id: "required" }),
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: formatMessage({
                          id: "invalid-phone",
                        }),
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="error">{errors.phone.message}</p>
                  )}
                </div>
              </Col>
              <Col xs={12}>
                {/* city */}
                <div className="inner">
                  <label htmlFor="city">
                    <FormattedMessage id="city" />:
                  </label>
                  <input
                    id="city"
                    type="text"
                    {...register("city", {
                      required: formatMessage({ id: "required" }),
                      minLength: {
                        value: 3,
                        message: formatMessage({ id: "min-length" }),
                      },
                      maxLength: {
                        value: 20,
                        message: formatMessage({ id: "max-length" }),
                      },
                    })}
                  />
                  {errors.city && (
                    <p className="error">{errors.city.message}</p>
                  )}
                </div>
              </Col>
              <Col xs={12}>
                {/* details */}
                <div className="inner">
                  <label htmlFor="details">
                    <FormattedMessage id="details" />:
                  </label>
                  <textarea
                    id="details"
                    type="text"
                    {...register("details", {
                      required: formatMessage({ id: "required" }),
                      minLength: {
                        value: 3,
                        message: formatMessage({ id: "min-length" }),
                      },
                      maxLength: {
                        value: 250,
                        message: formatMessage({ id: "details-max-length" }),
                      },
                    })}
                  />
                  {errors.details && (
                    <p className="error">{errors.details.message}</p>
                  )}
                </div>
              </Col>
            </Col>
          </Row>
          <div className="submit">
            <button className="btn submit-btn" type="submit">
              <FormattedMessage id="pay" />
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;
