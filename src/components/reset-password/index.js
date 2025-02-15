import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editUserPassword } from "@/store/actions";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import IcEye from "./assets/eye.svg";
import IcEyeSlash from "./assets/eye-slash.svg";
import { useState } from "react";
const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      newPassword: "",
      confirmedPassword: "",
    },
    mode: "all",
  });
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmedPasswordShow, setConfirmedPasswordShow] = useState(false);

  const handleLoginSubmittion = (data) => {
    dispatch(editUserPassword({ data, cookies: {}, intl, router }));
  };
  return (
    <div className={styles["reset-password"]}>
      <Container>
        <h3 className="title">
          <FormattedMessage id="reset-password-title" />
        </h3>
        <p className="description">
          <FormattedMessage id="reset-password-description" />
        </p>
        <form
          onSubmit={handleSubmit(handleLoginSubmittion)}
          className="reset-password-form"
        >
          <Row>
            <Col xs={12} md={7}>
              <div className="inner">
                <label htmlFor="email">
                  <FormattedMessage id="email" />:
                </label>
                <input
                  id="email"
                  {...register("email", {
                    required: intl.formatMessage({ id: "required" }),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: intl.formatMessage({ id: "invalidEmail" }),
                    },
                  })}
                />
                {errors?.email?.message && (
                  <p className="error">{errors?.email?.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="inner">
                <label htmlFor="newPassword">
                  <FormattedMessage id="new-password" /> :
                </label>
                <div className="password-input">
                  <input
                    {...register("newPassword", {
                      required: intl.formatMessage({ id: "required" }),
                      minLength: {
                        value: 6,
                        message: intl.formatMessage({ id: "passwordLength" }),
                      },
                    })}
                    type={passwordShow ? "text" : "password"}
                    id="newPassword"
                  />
                  <button
                    className="password-icon"
                    onClick={() => setPasswordShow(!passwordShow)}
                  >
                    {passwordShow ? <IcEyeSlash /> : <IcEye />}{" "}
                  </button>
                </div>
                {errors?.newPassword?.message && (
                  <p className="error">{errors?.newPassword?.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="inner">
                <label htmlFor="confirm-new-password">
                  <FormattedMessage id="confirm-new-password" /> :
                </label>
                <div className="password-input">
                  <input
                    {...register("confirmedPassword", {
                      required: intl.formatMessage({ id: "required" }),
                      minLength: {
                        value: 6,
                        message: intl.formatMessage({
                          id: "password-min-length",
                        }),
                      },
                      maxLength: {
                        value: 20,
                        message: intl.formatMessage({
                          id: "password-max-length",
                        }),
                      },
                      validate: (value) =>
                        value === watch("newPassword") ||
                        intl.formatMessage({ id: "password-not-matching" }),
                    })}
                    type={confirmedPasswordShow ? "text" : "password"}
                    id="confirm-new-password"
                  />
                  <button
                    className="password-icon"
                    onClick={() =>
                      setConfirmedPasswordShow(!confirmedPasswordShow)
                    }
                  >
                    {confirmedPasswordShow ? <IcEyeSlash /> : <IcEye />}{" "}
                  </button>
                </div>

                {errors?.confirmedPassword?.message && (
                  <p className="error">{errors?.confirmedPassword?.message}</p>
                )}
              </div>
            </Col>

            <div className="submit">
              <button className="btn submit-btn" type="submit">
                <FormattedMessage id="changePassword" />
              </button>
            </div>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default ResetPassword;
