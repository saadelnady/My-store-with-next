import { generateSquares } from "@/helpers/helpers";
import styles from "./styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { postUserSignup } from "@/store/actions";
import { useRouter } from "next/router";

const SignUp = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
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
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: intl.formatMessage({ id: "invalidEmail" }),
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              {/* Password */}
              <div className="inner">
                <label htmlFor="password">
                  <FormattedMessage id="password" />:
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: intl.formatMessage({ id: "required" }),
                    minLength: {
                      value: 6,
                      message: intl.formatMessage({ id: "required" }),
                    },
                  })}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              {/* Confirm Password */}
              <div className="inner">
                <label htmlFor="rePassword">
                  <FormattedMessage id="confirm-password" />:
                </label>
                <input
                  id="rePassword"
                  type="password"
                  {...register("rePassword", {
                    required: intl.formatMessage({ id: "required" }),
                    validate: (value) =>
                      value === watch("password") ||
                      intl.formatMessage({ id: "password-not-matching" }),
                  })}
                />
                {errors.rePassword && (
                  <p className="error-message">{errors.rePassword.message}</p>
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
                  <p className="error-message">{errors.phone.message}</p>
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
