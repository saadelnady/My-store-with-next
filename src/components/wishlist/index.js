import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./productCard";
import styles from "./styles/styles.module.scss";
import Loading from "../shared/loading-2/Index";
import WishListModal from "./modal";
import { deleteProductFromWishlist } from "@/store/actions";
const WishList = () => {
  const { wishlist, isLoading } = useSelector((state) => state.wishlist);
  const [targetProductId, setTargetProductId] = useState("");
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const dispatch = useDispatch();
  const handleCloseDeleteItemModal = () => {
    setShowDeleteItemModal(false);
    setTargetProductId("");
  };
  const intl = useIntl();
  const handleTargetProductId = (id) => {
    if (id) {
      setTargetProductId(id);
    } else {
      setTargetProductId("");
    }
  };
  const handleDeleteProductFromWishList = () => {
    dispatch(
      deleteProductFromWishlist({
        cookies: {},
        productId: targetProductId,
        intl,
      })
    );
  };
  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="wishlist" /> },
  ];
  return (
    <div className={styles.wishlist}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BreadCrumb items={items} />
          <Container>
            <Row className="gy-3">
              {wishlist && wishlist?.length > 0 ? (
                wishlist?.map((product) => {
                  return (
                    <Col xs={12} sm={6} md={6} lg={3} key={product._id}>
                      <ProductCard
                        product={product}
                        handleTargetProductId={handleTargetProductId}
                        setShowDeleteItemModal={setShowDeleteItemModal}
                      />
                    </Col>
                  );
                })
              ) : (
                <div className="nodata-wrapper">
                  <p className="no-data">
                    <FormattedMessage id="no-data" />
                  </p>
                </div>
              )}
            </Row>
            <WishListModal
              showModal={showDeleteItemModal}
              handleClose={handleCloseDeleteItemModal}
              handleRemove={handleDeleteProductFromWishList}
              modalTitle={
                <FormattedMessage id="remove-product-from-wishlist-title" />
              }
              modalDescription={
                <FormattedMessage id="remove-product-from-wishlist-description" />
              }
            />
          </Container>
        </>
      )}
    </div>
  );
};

export default WishList;
