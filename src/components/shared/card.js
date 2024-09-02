import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
  const { title, price, sold, description, imageCover, ratingsAverage } = item;

  const first100CharsOfDesc = description.slice(0, 100) + "...";
  const first50CharsOfTitle = title.slice(0, 50) + "...";
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 shadow rounded">
      <div className="header">
        <div className="product-img-wrapper">
          <Image
            className="product-img w-100"
            src={imageCover}
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div className="discountPercentage">{ratingsAverage} ★</div>
      </div>
      <div className="content">
        <h3 className="title">{first50CharsOfTitle}</h3>
        <p className="description">
          {first100CharsOfDesc.split("\n").map((line, index) => (
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
