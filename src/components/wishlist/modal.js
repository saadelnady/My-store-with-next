import React from "react";
import { FormattedMessage } from "react-intl";
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
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="title">{modalTitle}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="description">{modalDescription}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <FormattedMessage id="cancel" />
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleRemove();
            handleClose();
          }}
        >
          <FormattedMessage id="remove" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
