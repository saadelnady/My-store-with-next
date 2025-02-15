import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUserLogin } from "@/store/actions";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import EyeIcon from "./assets/eye.svg";
import EyeSlashIcon from "./assets/eye-slash.svg";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();

  const handleLoginSubmittion = (data) => {
    dispatch(postUserLogin({ data, cookies: {}, intl, router }));
  };
  return (
    <div className={styles.login}>
      <Container>
        <h3 className="title">
          <FormattedMessage id="login-title" />
        </h3>
        <p className="description">
          <FormattedMessage id="login-description" />
        </p>
        <form
          onSubmit={handleSubmit(handleLoginSubmittion)}
          className="login-form"
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
                <label htmlFor="password">
                  <FormattedMessage id="password" /> :
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
                      showPasswordHandler();
                    }}
                  >
                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                </div>

                {errors?.password?.message && (
                  <p className="error">{errors?.password?.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="links">
                <Link href="/signUp">
                  <a>
                    <FormattedMessage id="dont-have-account" />
                  </a>
                </Link>
                <Link href="/forget-password">
                  <a>
                    <FormattedMessage id="forget-password" />
                  </a>
                </Link>
              </div>
            </Col>

            <div className="submit">
              <button className="btn submit-btn" type="submit">
                <FormattedMessage id="login" />
              </button>
            </div>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Login;
