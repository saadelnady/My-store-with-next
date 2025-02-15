import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import IcClose from "./assets/svgs/ic-remove.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./styles/styles.module.scss";
const CartModal = ({
  showModal,
  handleClose,
  handleRemove,
  modalTitle,
  modalDescription,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      className={styles["cart-modal"]}
    >
      <Modal.Header>
        <p className="title">{modalTitle}</p>
        <button className="btn-close-modal" onClick={handleClose}>
          <IcClose />
        </button>
      </Modal.Header>
      <Modal.Body>
        <p className="description">{modalDescription}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-delete "
          onClick={() => {
            handleRemove();
            handleClose();
          }}
        >
          <FormattedMessage id="remove" />
        </Button>
        <Button className="btn-cancel " onClick={handleClose}>
          <FormattedMessage id="cancel" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
