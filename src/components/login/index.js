import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { generateSquares } from "@/helpers/helpers";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUserLogin } from "@/store/actions";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

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
  const router = useRouter();
  const intl = useIntl();

  const handleLoginSubmittion = (data) => {
    dispatch(postUserLogin({ data, cookies: {}, router, intl }));
  };
  return (
    <div className="submit-page">
      <div className="squares">{generateSquares()}</div>
      <Container>
        <div className={styles["login-form"]}>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h3>
                {" "}
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
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
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
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
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
