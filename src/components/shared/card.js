import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
  const { title, price, sold, description, imageCover, ratingsAverage } = item;

  return (
    <div className="product-card shadow">
      <div className="header">
        <div className="product-img-wrapper">
          <Image
            className="product-img"
            src={imageCover}
            alt={title}
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="discountPercentage">{ratingsAverage} ★</div>
        <div className="product-icons">
          <svg>{/* Favorite icon */}</svg>
          <svg>{/* Share icon */}</svg>
        </div>
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <p className="final-price">${price}</p>
        <p className="price-before-discount">Sold: {sold}</p>
      </div>
    </div>
  );
};

export default Card;
