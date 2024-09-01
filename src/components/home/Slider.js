import { useEffect, useState } from "react";
import slideImageOne from "../../../public/images/slider-image-1.jpeg";
import slideImageTwo from "../../../public/images/slider-image-2.jpeg";
import slideImageThree from "../../../public/images/slider-image-3.jpeg";
import Image from "next/image";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { image: slideImageOne, alt: "img-slider" },
    { image: slideImageTwo, alt: "img-slider" },
    { image: slideImageThree, alt: "img-slider" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider">
      <div className="overlay"></div>
      <div className="content">
        <div>
          <h1>Welcome to My Store Website</h1>
          <p>
            Discover the best products at unbeatable prices. Browse through our
            categories and find exactly what you need!
          </p>
        </div>
      </div>
      <div className="images">
        {images.map((item, index) => (
          <Image
            src={item.image}
            alt={item.alt}
            key={index}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>

      <div className="nav-buttons">
        <button
          onClick={() =>
            setCurrentImageIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          &#10095;
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
