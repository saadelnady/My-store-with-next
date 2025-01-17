import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { generateSquares } from "@/helpers/helpers";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUserLogin } from "@/store/actions";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";

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
    <div className="submit-page">
      <div className="squares">{generateSquares()}</div>
      <Container>
        <div className={styles["login-form"]}>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h3>
                <FormattedMessage id="login" />
              </h3>
              <form onSubmit={handleSubmit(handleLoginSubmittion)}>
                <div>
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

                <div>
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

                <button className="btn" type="submit">
                  <FormattedMessage id="login" />
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Login;
