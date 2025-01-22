import { FormattedMessage, useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/otp.module.scss";
import Link from "next/link";
import { parseCookies } from "nookies";

// import IcBack from "./assets/svgs/ic_arrow_back.svg";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { postUserForgetPassword, postUserOtp } from "@/store/actions";
export default function Otp() {
  const { formatMessage } = useIntl();
  const cookies = parseCookies();
  const targetEmail = cookies.email;

  const [filledInputs, setFilledInputs] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      resetCode: "",
    },
    mode: "all",
  });
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();
  const onSubmit = (formData) => {
    const values = formData.otp;
    const data = {
      resetCode: values.join(""),
    };
    dispatch(postUserOtp({ cookies: {}, data, intl, router }));
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    const inputs = Array.from(
      e.target.parentElement.parentElement.querySelectorAll("input")
    );

    if (value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      updateFilledInputs(index, value.trim() !== "");
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      const inputs = Array.from(
        e.target.parentElement.parentElement.querySelectorAll("input")
      );

      if (index > 0) {
        inputs[index - 1].focus();
      }
      updateFilledInputs(index, false);
    }
  };

  const updateFilledInputs = (index, isFilled) => {
    const updatedInputs = [...filledInputs];
    updatedInputs[index] = isFilled;
    setFilledInputs(updatedInputs);
  };
  return (
    <div className={`${styles.otp_wrapper}`}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Link href={""}>
            <a className="back">
              <IcBack />
              <FormattedMessage id="getBack" />
            </a>
          </Link> */}

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

                <Col xs={12} sm={10} md={8} lg={6} xl={5} dir="ltr">
                  <div className="form-group inputs">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <div key={index} className="text-center ">
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          className={`input text-center `}
                          {...register(`otp[${index}]`, {
                            required: {
                              value: true,
                              message: formatMessage({ id: "required" }),
                            },
                            pattern: {
                              value: /^[0-9]$/,
                              message: formatMessage({
                                id: "invalid-otp-digit",
                              }),
                            },
                          })}
                          onInput={(e) => handleInput(e, index)}
                          onKeyDown={(e) => handleBackspace(e, index)}
                        />
                        {errors?.otp?.[index] && (
                          <p className="error-hint text-danger mt-1  ">
                            {errors.otp[index]?.message}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
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

              <Row>
                <Col xs={12} md={7}>
                  <button className="btn mx-auto send" type="submit">
                    <FormattedMessage id="active" />
                  </button>
                </Col>
              </Row>
            </Row>
          </Container>
        </form>
      </Container>
    </div>
  );
}
