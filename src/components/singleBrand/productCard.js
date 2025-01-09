import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import icStar from "../../../public/images/ic-star.png";

const ProductCard = ({ product }) => {
  const {
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
          <button className="btn border m-0 add-to-cart">
            <FormattedMessage id="addToCart" />
          </button>
          <button className="btn wishlist">
            <i className="bi bi-suit-heart "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
