import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
 import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUserLogin } from "@/store/actions";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();

  const handleLoginSubmittion = (data) => {
    dispatch(postUserLogin({ data, cookies: {}, intl, router }));
  };
  return (
    <Container>
      <div className={styles["login-form"]}>
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
                  <p className="error-message">{errors?.email?.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="inner">
                <label htmlFor="password">
                  <FormattedMessage id="password" /> :
                </label>
                <input
                  {...register("password", {
                    required: intl.formatMessage({ id: "required" }),
                    minLength: {
                      value: 6,
                      message: intl.formatMessage({ id: "passwordLength" }),
                    },
                  })}
                  type="password"
                  id="password"
                />
                {errors?.password?.message && (
                  <p className="error-message">{errors?.password?.message}</p>
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
      </div>
    </Container>
  );
};

export default Login;
