import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./styles/styles.module.scss";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { FormattedMessage } from "react-intl";
import Table from "./table";
import OrderModal from "./modal";
import { formatDate } from "@/helpers/helpers";

import Loading from "../shared/loading-2/Index";
const Orders = () => {
  const { orders, isLoading } = useSelector((state) => state.orders);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [targetOrder, setTargetOrder] = useState({});
  const handleModalShow = () => setIsActiveModal((prev) => !prev);
  const handleTargetOrder = (order) => setTargetOrder(order);
  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="orders" /> },
  ];

  const cols = [
    { key: "orderId", label: <FormattedMessage id="orderId" /> },
    { key: "date", label: <FormattedMessage id="date" /> },
    { key: "status", label: <FormattedMessage id="status" /> },
    { key: "total", label: <FormattedMessage id="total" /> },
    { key: "showOrder", label: <FormattedMessage id="showOrder" /> },
  ];

  const rows = [
    {
      key: "order.imageCover",
      render: (item) => (
        <div className="item-num">
          <h4>#{item?.id}</h4>
        </div>
      ),
    },

    {
      key: "order.date",
      render: (item) => (
        <p className="item-date">
          <h4>{formatDate(item?.createdAt)}</h4>
        </p>
      ),
    },

    {
      key: "order.status",
      render: (item) => (
        <div className="item-status ">
          <h4>
            {" "}
            {item?.isDelivered ? (
              <FormattedMessage id="delivered" />
            ) : (
              <FormattedMessage id="notDelivered" />
            )}
          </h4>
        </div>
      ),
    },
    {
      key: "order.total",
      render: (item) => (
        <div className="item-total">
          <h4>
            {item?.totalOrderPrice} <span>{<FormattedMessage id="EGP" />}</span>
          </h4>

          <span className="products-count">{item?.cartItems?.length}</span>
          {<FormattedMessage id="product" />}
        </div>
      ),
    },
    {
      key: "showOrder",
      render: (item) => (
        <div className="item-show">
          <button
            className="showOrder"
            onClick={() => {
              handleModalShow();
              handleTargetOrder(item);
            }}
          >
            <FormattedMessage id="showOrder" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.orders}>
      <BreadCrumb items={items} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : orders?.length > 0 ? (
          <div className="g-4 py-4">
            <Table cols={cols} rows={rows} data={orders} />
          </div>
        ) : (
          <div className="nodata-wrapper">
            <p className="no-data">
              <FormattedMessage id="no-data" />
            </p>
          </div>
        )}
      </Container>
      <OrderModal
        show={isActiveModal}
        handleClose={handleModalShow}
        item={targetOrder}
      />
    </div>
  );
};

export default Orders;
