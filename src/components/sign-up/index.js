import styles from "./styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { postUserSignup } from "@/store/actions";
import { useRouter } from "next/router";
import EyeSlashIcon from "./assets/eye-slash.svg";
import EyeIcon from "./assets/eye.svg";
import { useState } from "react";
const SignUp = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(postUserSignup({ data, cookies: {}, intl, router }));
  };

  return (
    <div className={styles["sign-up"]}>
      <Container>
        <h3 className="title">
          <FormattedMessage id="sign-up-title" />
        </h3>
        <p className="description">
          <FormattedMessage id="sign-up-description" />
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
          <Row>
            <Col xs={12} md={6} lg={6}>
              {/* Name */}
              <div className="inner">
                <label htmlFor="name">
                  <FormattedMessage id="name" />:
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: intl.formatMessage({ id: "required" }),
                    maxLength: {
                      value: 20,
                      message: intl.formatMessage({ id: "max-length" }),
                    },
                    minLength: {
                      value: 3,
                      message: intl.formatMessage({ id: "min-length" }),
                    },
                  })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              {/* Email */}
              <div className="inner">
                <label htmlFor="email">
                  <FormattedMessage id="email" />:
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: intl.formatMessage({ id: "required" }),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: intl.formatMessage({ id: "invalidEmail" }),
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
            </Col>
            {/* Password */}
            <Col xs={12} md={6} lg={6}>
              <div className="inner">
                <label htmlFor="password">
                  <FormattedMessage id="password" />:
                </label>
                <div className="password-input">
                  <input
                    {...register("password", {
                      required: intl.formatMessage({ id: "required" }),
                      minLength: {
                        value: 6,
                        message: intl.formatMessage({ id: "passwordLength" }),
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    id="password"
                  />
                  <button
                    className="show-password"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>
            </Col>
            {/* Confirm Password */}
            <Col xs={12} md={6} lg={6}>
              <div className="inner">
                <label htmlFor="rePassword">
                  <FormattedMessage id="confirm-password" />:
                </label>
                <div className="password-input">
                  <input
                    {...register("rePassword", {
                      required: intl.formatMessage({ id: "required" }),
                      minLength: {
                        value: 6,
                        message: intl.formatMessage({ id: "passwordLength" }),
                      },
                      maxLength: {
                        value: 20,
                        message: intl.formatMessage({
                          id: "password-max-length",
                        }),
                      },
                      validate: (value) =>
                        value === watch("password") ||
                        intl.formatMessage({ id: "password-not-matching" }),
                    })}
                    type={showRePassword ? "text" : "password"}
                    id="rePassword"
                  />
                  <button
                    className="show-password"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowRePassword(!showRePassword);
                    }}
                  >
                    {showRePassword ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.rePassword && (
                  <p className="error">{errors.rePassword.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              {/* Phone */}
              <div className="inner">
                <label htmlFor="phone">
                  <FormattedMessage id="phone" />:
                </label>
                <input
                  id="phone"
                  type="text"
                  {...register("phone", {
                    required: intl.formatMessage({ id: "required" }),
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: intl.formatMessage({
                        id: "invalid-phone",
                      }),
                    },
                  })}
                />
                {errors.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </div>
            </Col>
          </Row>
          <div className="submit">
            <button className="btn submit-btn" type="submit">
              <FormattedMessage id="signup" />
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
