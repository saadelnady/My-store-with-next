import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Table from "./table";
import { FormattedMessage } from "react-intl";
import Image from "next/future/image";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import IcPLus from "./assets/svgs/ic-plus.svg";
import IcMinus from "./assets/svgs/ic-minus.svg";
import IcRemove from "./assets/svgs/ic-remove.svg";
import IcStar from "./assets/svgs/ic-star.svg";
import Rate from "rc-rate";
import { useRouter } from "next/router";
import "rc-rate/assets/index.css";
import styles from "./styles/styles.module.scss";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products, totalCartPrice } = cart;
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const cols = [
    { key: "product", label: <FormattedMessage id="product" /> },
    { key: "price", label: <FormattedMessage id="price" /> },
    { key: "count", label: <FormattedMessage id="quantity" /> },
    { key: "total", label: <FormattedMessage id="total" /> },
  ];

  const rows = [
    {
      key: "product.imageCover",
      render: (item) => (
        <div className="product-details">
          <button className="btn remove">
            <IcRemove />
          </button>
          <div className="product-img">
            <Image
              src={item.product.imageCover}
              alt={item.product.title}
              width={500}
              height={500}
            />
          </div>
          <div className="content">
            <h3 className="product-title">{item.product.title} </h3>
            <p className="brand-title">{item.product.brand.name} </p>
            <Rate
              character={<IcStar />}
              count={5}
              value={item.product.ratingsAverage}
              allowHalf
              direction={dir}
              className={`rate`}
            />
          </div>
        </div>
      ),
    },

    {
      key: "product.price",
      render: (item) => (
        <p className="price">
          {item.price} <FormattedMessage id="egp" />
        </p>
      ),
    },

    {
      key: "product.count",
      render: (item) => (
        <div className="counter">
          <div className="buttons">
            <button className="increase">
              <IcPLus />
            </button>
            <button>
              <IcMinus />
            </button>
          </div>
          <span>{item.count}</span>
        </div>
      ),
    },
    {
      key: "total",
      render: (item) => (
        <p className="total">
          {item.price * item.count} <FormattedMessage id="egp" />
        </p>
      ),
    },
  ];
  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="cart" /> },
  ];
  return (
    <div className={styles.cart}>
      <Container>
        <BreadCrumb items={items} />
        <div className="p-4">
          {products?.length > 0 ? (
            <Table cols={cols} rows={rows} data={products} />
          ) : (
            <p className="text-center">
              <FormattedMessage id="no-data" />
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
