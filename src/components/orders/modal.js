import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

import styles from "./styles/styles.module.scss";
import Image from "next/future/image";

import IcClose from "./assets/ic-close.svg";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { formatDate } from "@/helpers/helpers";

// import required modules
const ProductModal = ({ show, handleClose, item }) => {
  const { locale } = useRouter();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="custom-modal-width"
      className={styles["order-modal"]}
    >
      <Modal.Header>
        <button onClick={handleClose}>
          <IcClose />
        </button>
      </Modal.Header>
      <div className="productQuickView">
        <div className="inner">
          <div className="order-top">
            <div>
              <h3>
                <FormattedMessage id="orderId" /> :
              </h3>
              <p> #{item?.id}</p>
            </div>
            <div>
              <h3>
                <FormattedMessage id="date" />:
              </h3>
              <p> {formatDate(item?.createdAt)}</p>
            </div>
            <div>
              <h3>
                <FormattedMessage id="phone" /> :
              </h3>
              <p> {item?.shippingAddress?.phone}</p>
            </div>
            <div>
              <h3>
                <FormattedMessage id="city" /> :
              </h3>
              <p> {item?.shippingAddress?.city}</p>
            </div>
            <div>
              <h3>
                <FormattedMessage id="details" /> :
              </h3>
              <p> {item?.shippingAddress?.details}</p>
            </div>
          </div>
          <div className="order-details">
            <h3>
              <FormattedMessage id="order-details" /> :
            </h3>

            <div className="order-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">
                      <FormattedMessage id="product" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="quantity" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="total" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item?.cartItems?.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex gap-3 align-items-center pt-2 pb-3 item-data">
                            <Image
                              width={45}
                              src={item?.product?.imageCover}
                              height={45}
                              alt={item?.product?.title}
                              className="item-img"
                            />
                            <span>{item?.product?.title}</span>
                          </div>
                        </td>
                        <td>
                          <span>{item.count}</span>
                        </td>
                        <td>
                          <span className="price">
                            {item.price} <FormattedMessage id="egp" />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Row className="order-row">
              <Col xs={6} md={7} lg={8}>
                <span>
                  <FormattedMessage id="tax-price" />
                </span>
              </Col>
              <Col xs={4} md={5} lg={3}>
                <span className="warning">
                  {item?.taxPrice} <FormattedMessage id="egp" />
                </span>
              </Col>
            </Row>
            <Row className="order-row-2">
              <Col xs={6} md={7} lg={8}>
                <span>
                  <FormattedMessage id="shipping" />
                </span>
              </Col>
              <Col xs={6} md={5} lg={3}>
                <span>
                  {item?.shippingPrice} <FormattedMessage id="egp" />{" "}
                </span>
              </Col>
            </Row>
            <Row className="order-row">
              <Col xs={6} md={7} lg={8}>
                <span>
                  <FormattedMessage id="payment-method" />
                </span>
              </Col>
              <Col xs={6} md={5} lg={3}>
                <span className="quantity">{item?.paymentMethodType}</span>
              </Col>
            </Row>
            <Row className="order-row-2">
              <Col xs={6} md={7} lg={8}>
                <span>
                  <FormattedMessage id="total" />
                </span>
              </Col>
              <Col xs={6} md={5} lg={3}>
                <span className="warning">
                  {item.totalOrderPrice} <FormattedMessage id="egp" />
                </span>
              </Col>
            </Row>
            {/* <Row className="order-row">
              <Col xs={6} md={7} lg={8}>
                <span>
                  <FormattedMessage id="note" />
                </span>
              </Col>
              <Col xs={6} md={5} lg={3}>
                <span className="quantity">{item?.note} </span>
              </Col>
            </Row>
            <Row className="order-row-2">
              <Col xs={6} md={7} lg={8}>
                <span>
                  <FormattedMessage id="deliveredDate" />
                </span>
              </Col>
              <Col xs={6} md={5} lg={3}>
                <span className="quantity">{item?.reciveDate}</span>
              </Col>
            </Row> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
