import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/future/image";
import icStar from "../../../public/images/ic-star.png";
const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Container>
      <Row>
        {products &&
          products.length > 0 &&
          products?.map((product, index) => {
            const {
              title,
              category,
              price,
              imageCover,
              ratingsAverage,
              priceAfterDiscount,
            } = product;
            const first30CharsOfTitle = title.slice(0, 20) + "...";
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <div className="card">
                  {priceAfterDiscount && (
                    <p className="sale">
                      <span>Sale</span>
                    </p>
                  )}
                  <Image
                    className="product-img"
                    src={imageCover}
                    alt={title}
                    width={500}
                    height={500}
                  />
                  <div className="content">
                    <h3 className="category-title">{category?.name}</h3>
                    <h4 className="product-title">{first30CharsOfTitle}</h4>
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
                        Add to cart
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
