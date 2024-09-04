import googleplaylogo from "../../../public/images/googleplay-logo.png";
import applestorelogo from "../../../public/images/apple-store.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h2 className="fe-bold">Get our App</h2>
          <p>
            We Will Send You a Link , Open it on Your Phone To Download The App
          </p>
          <input type="email" placeholder="Email ...." className="input" />
          <button className="btn">Subscribe</button>
        </div>
        <div className="bottom">
          <p>Payment Partners</p>
          <ul className="icons">
            <li>
              <i class="bi bi-instagram"></i>
            </li>
            <li>
              <i class="bi bi-facebook"></i>
            </li>
            <li>
              <i class="bi bi-tiktok"></i>
            </li>
            <li>
              <i class="bi bi-twitter"></i>
            </li>
            <li>
              <i class="bi bi-linkedin"></i>
            </li>
            <li>
              <i class="bi bi-youtube"></i>
            </li>
          </ul>
          <div className="imgs">
            <p>Get Deliveries</p>
            <Image
              src={googleplaylogo}
              alt={"googleplaylogo"}
              className="store"
            />
            <Image
              src={applestorelogo}
              alt={"applestorelogo"}
              className="store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
