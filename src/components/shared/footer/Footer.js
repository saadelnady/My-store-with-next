import googleplaylogo from "public/images/googleplay-logo.png";
import applestorelogo from "public/images/apple-store.png";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";
import Styles from "./styles/styles.module.scss";
const Footer = () => {
  const intl = useIntl();
  return (
    <div className={Styles.footer}>
      <div className="container">
        <div className="top">
          <h2 className="fe-bold">
            <FormattedMessage id="getOurApp" />
          </h2>
          <p>
            <FormattedMessage id="getAppMessage" />
          </p>
          <input
            type="email"
            placeholder={`${intl.formatMessage({ id: "email" })}...`}
            className="input"
          />
          <button className="btn">
            <FormattedMessage id="subscribe" />
          </button>
        </div>
        <div className="bottom">
          <p>Payment Partners</p>
          <ul className="icons">
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-tiktok"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-linkedin"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
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
