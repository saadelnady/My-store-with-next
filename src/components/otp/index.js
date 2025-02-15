import { useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/otp.module.scss";
import { parseCookies } from "nookies";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { postUserForgetPassword, postUserOtp } from "@/store/actions";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const cookies = parseCookies();
  const targetEmail = cookies.email;
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      resetCode: otp.join(""),
    };
    dispatch(postUserOtp({ cookies: {}, data, intl, router }));
  };

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={`${styles.otp_wrapper}`}>
      <Container>
        <Row>
          <Row>
            <div className="d-flex flex-column align-items-center title">
              <h5>
                <FormattedMessage id="otp-title" />
              </h5>
              <p className="subtitle">
                <FormattedMessage id="otp-subtitle" />
                <span>{targetEmail}</span>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <Row className="justify-content-center align-items-center">
                <Col xs={12} sm={10} md={8} lg={6} xl={5} dir="ltr">
                  <div className="form-group inputs">
                    {otp.map((digit, index) => (
                      <div key={index} className="text-center ">
                        <input
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          ref={(el) => (inputRefs.current[index] = el)}
                          className={`input text-center ${
                            digit ? "filled" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </Col>
                <div className="send-otp">
                  <FormattedMessage id="send-otp" />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        postUserForgetPassword({
                          data: { email: targetEmail },
                          intl,
                          router,
                        })
                      );
                    }}
                  >
                    <FormattedMessage id="resend-otp" />
                  </button>
                </div>
                <Col xs={12} md={7}>
                  <button
                    className="mx-auto saveBtn"
                    type="submit"
                    disabled={otp.includes("")}
                  >
                    <FormattedMessage id="active" />
                  </button>
                </Col>
              </Row>
            </form>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Otp;
