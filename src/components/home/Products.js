import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/future/image";
import icStar from "../../../public/images/ic-star.png";
import { FormattedMessage } from "react-intl";
import CustomHeading from "../shared/customHeading/CustomHeading";
const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Container>
      <CustomHeading
        title={<FormattedMessage id="products" />}
        subTitle={<FormattedMessage id="productsSubtitle" />}
      />
      <Row>
        {products &&
          products.length > 0 &&
          products?.reverse()?.map((product, index) => {
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
              <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                <div className="card">
                  {priceAfterDiscount && (
                    <p className="sale">
                      <span>
                        <FormattedMessage id="sale" />
                      </span>
                    </p>
                  )}
                  <Image
                    className="product-img"
                    src={imageCover}
                    alt={"product-img"}
                    width={500}
                    height={500}
                  />
                  <div className="content">
                    <h3 className="title">{title}</h3>
                    <h4 className="description">{description}</h4>
                    <div className="details">
                      <p
                        className={`price ${
                          priceAfterDiscount
                            ? "text-decoration-line-through"
                            : ""
                        }`}
                      >
                        ${price}
                      </p>
                      {priceAfterDiscount && (
                        <p className="price">${priceAfterDiscount}</p>
                      )}

                      <div className="rating">
                        <Image
                          src={icStar}
                          alt="rating-icon"
                          className="rating-icon"
                        />
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
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Products;
