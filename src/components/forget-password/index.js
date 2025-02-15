import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUserForgetPassword } from "@/store/actions";
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
    },
    mode: "all",
  });
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();

  const handleSubmition = (data) => {
    dispatch(postUserForgetPassword({ data, intl, router }));
  };
  return (
    <div className={styles["forget-password"]}>
      <Container>
        <h3 className="title">
          <FormattedMessage id="forget-password-title" />
        </h3>
        <p className="description">
          <FormattedMessage id="forget-password-description" />
        </p>
        <form
          onSubmit={handleSubmit(handleSubmition)}
          className="forget-password-form"
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

            <div className="submit">
              <button className="btn submit-btn" type="submit">
                <FormattedMessage id="send" />
              </button>
            </div>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Login;
