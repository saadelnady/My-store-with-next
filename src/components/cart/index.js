import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Table from "./table";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/future/image";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import IcPLus from "./assets/svgs/ic-plus.svg";
import IcMinus from "./assets/svgs/ic-minus.svg";
import IcRemove from "./assets/svgs/ic-remove.svg";
import EmptyCart from "./assets/svgs/empty-cart.svg";
import "rc-rate/assets/index.css";
import styles from "./styles/styles.module.scss";
import { deleteCartItem, deleteCartItems, editCart } from "@/store/actions";
import { showToast } from "@/helpers/helpers";
import CartModal from "./modal";
import Loading from "../shared/loading-2/Index";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showDeleteAllItemsModal, setShowDeleteAllItemsModal] = useState(false);
  const [targetProductId, setTargetProductId] = useState("");
  const { cart, isLoading } = useSelector((state) => state.cart);

  const products = cart?.products || [];
  const totalCartPrice = cart?.totalCartPrice || 0;

  const handleCloseDeleteItemModal = () => {
    setShowDeleteItemModal(false);
    setTargetProductId("");
  };
  const handleCloseDeleteAllItemsModal = () => {
    setShowDeleteAllItemsModal(false);
  };
  const handleTargetProductId = (id) => {
    if (id) {
      setTargetProductId(id);
    } else {
      setTargetProductId("");
    }
  };
  const handleIncrement = (product) => {
    if (product.count === 5) {
      showToast("error", "max-quantity", intl);
      return;
    }
    dispatch(
      editCart({
        cookies: {},
        productId: product?.product?._id,
        data: { count: product.count + 1 },
      })
    );
  };
  const handleDecrement = (product) => {
    if (product.count === 1) {
      showToast("error", "min-quantity", intl);
      return;
    }
    dispatch(
      editCart({
        cookies: {},
        productId: product?.product?._id,
        data: { count: product.count - 1 },
      })
    );
  };
  const handleRemoveCartItem = () => {
    dispatch(
      deleteCartItem({
        cookies: {},
        productId: targetProductId,
        intl,
      })
    );
  };
  const handleRemoveAllCartItems = () => {
    dispatch(
      deleteCartItems({
        cookies: {},
        intl,
      })
    );
  };
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
          <button
            className="btn remove"
            onClick={() => {
              setShowDeleteItemModal(true);
              handleTargetProductId(item?.product?._id);
            }}
          >
            <IcRemove />
          </button>
          <div className="product-img ">
            <Image
              src={item?.product?.imageCover}
              alt={item?.product?.title}
              width={500}
              height={500}
            />
          </div>
          <div className="content">
            <h3 className="product-title">{item?.product?.title} </h3>
            <p className="brand-title">{item?.product?.brand?.name} </p>
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
            <button
              className="increase"
              onClick={() => {
                handleIncrement(item);
              }}
            >
              <IcPLus />
            </button>
            <button
              onClick={() => {
                handleDecrement(item);
              }}
            >
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BreadCrumb items={items} />
          <Container>
            {products?.length > 0 ? (
              <Row className="g-4 py-4">
                <Col xs={12} sm={12} md={8}>
                  <Table cols={cols} rows={rows} data={products} />
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <div className="cart-total">
                    <h3 className="total-title">
                      <FormattedMessage id="cart-total" />
                    </h3>
                    <div className="total-value">
                      <FormattedMessage id="total" />
                      <p className="value">
                        {totalCartPrice} <FormattedMessage id="egp" />
                      </p>
                    </div>
                    <div className="checkout">
                      <Link href="/checkout">
                        <a className="btn checkout-btn">
                          <FormattedMessage id="checkout" />
                        </a>
                      </Link>
                    </div>
                    <div className="remove-all">
                      <button
                        className="btn remove-btn bg-danger"
                        onClick={() => {
                          setShowDeleteAllItemsModal(true);
                        }}
                      >
                        <FormattedMessage id="remove-all-products-from-cart" />
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            ) : (
              <div className="empty-cart">
                <EmptyCart alt="empty-cart" width={500} height={500} />{" "}
                <h2>
                  <FormattedMessage id="empty-cart-title" />
                </h2>
                <p>
                  <FormattedMessage id="empty-cart-description" />
                </p>
              </div>
            )}
          </Container>
        </>
      )}

      <CartModal
        showModal={showDeleteItemModal}
        handleClose={handleCloseDeleteItemModal}
        handleRemove={handleRemoveCartItem}
        modalTitle={<FormattedMessage id="remove-product" />}
        modalDescription={<FormattedMessage id="remove-product-from-cart" />}
      />
      <CartModal
        showModal={showDeleteAllItemsModal}
        handleClose={handleCloseDeleteAllItemsModal}
        handleRemove={handleRemoveAllCartItems}
        modalTitle={
          <FormattedMessage id="remove-all-products-from-cart-title" />
        }
        modalDescription={
          <FormattedMessage id="remove-all-products-from-cart-description" />
        }
      />
    </div>
  );
};

export default Cart;
