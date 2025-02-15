import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import icStar from "../../../public/images/ic-star.png";
import { useDispatch, useSelector } from "react-redux";
import { postAddProductToCart } from "@/store/actions";
import { useRouter } from "next/router";
import { showToast } from "@/helpers/helpers";
import IcRemove from "./assets/svgs/ic-remove.svg";
const ProductCard = ({
  product,
  handleTargetProductId,
  setShowDeleteItemModal,
}) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const exictingProductInCart = cart?.products?.find(
    (item) => product._id === item.product || product._id === item.product._id
  );

  const intl = useIntl();
  const router = useRouter();
  const {
    _id,
    title,
    category,
    price,
    imageCover,
    description,
    ratingsAverage,
    priceAfterDiscount,
  } = product;

  return (
    <div className="item">
      {priceAfterDiscount && (
        <p className="sale">
          <span>
            <FormattedMessage id="sale" />
          </span>
        </p>
      )}
      <button
        className="btn remove"
        onClick={() => {
          handleTargetProductId(_id);
          setShowDeleteItemModal(true);
        }}
      >
        <IcRemove />
      </button>
      <Link href={`/products/${product?.slug}`}>
        <a>
          <Image
            className="product-img"
            src={imageCover}
            alt={"product-img"}
            width={500}
            height={500}
          />
        </a>
      </Link>
      <div className="content">
        <Link href={`/products/${product?.slug}`}>
          <a>
            <h3 className="title">{title}</h3>
          </a>
        </Link>
        <h4 className="description">{description}</h4>
        <div className="details">
          <p
            className={`price ${
              priceAfterDiscount ? "text-decoration-line-through" : ""
            }`}
          >
            ${price}
          </p>
          {priceAfterDiscount && <p className="price">${priceAfterDiscount}</p>}

          <div className="rating">
            <Image src={icStar} alt="rating-icon" className="rating-icon" />
            <span className="rating-number"> {ratingsAverage}</span>
          </div>
        </div>
        <div className="buttons">
          <button
            className={`btn border m-0 add-to-cart ${
              exictingProductInCart ? "disabled" : ""
            }`}
            onClick={() => {
              if (isLoggedIn) {
                if (!exictingProductInCart) {
                  dispatch(postAddProductToCart({ data: { productId: _id } }));
                }
              } else {
                showToast("error", "login-first", intl);
                setTimeout(() => {
                  router.push("/login");
                }, 1500);
              }
            }}
          >
            {exictingProductInCart ? (
              <FormattedMessage id="existing-product-in-cart" />
            ) : (
              <FormattedMessage id="addToCart" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
