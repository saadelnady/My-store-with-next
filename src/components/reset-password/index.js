import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editUserPassword } from "@/store/actions";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";

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

  const handleLoginSubmittion = (data) => {
    console.log(data);
    dispatch(editUserPassword({ data, cookies: {}, intl, router }));
  };
  return (
    <Container>
      <div className={styles["reset-password"]}>
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
                  <p className="error-message">{errors?.email?.message}</p>
                )}
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="inner">
                <label htmlFor="newPassword">
                  <FormattedMessage id="new-password" /> :
                </label>
                <input
                  {...register("newPassword", {
                    required: intl.formatMessage({ id: "required" }),
                    minLength: {
                      value: 6,
                      message: intl.formatMessage({ id: "passwordLength" }),
                    },
                  })}
                  type="password"
                  id="newPassword"
                />
                {errors?.newPassword?.message && (
                  <p className="error-message">
                    {errors?.newPassword?.message}
                  </p>
                )}
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="inner">
                <label htmlFor="confirm-new-password">
                  <FormattedMessage id="confirm-new-password" /> :
                </label>
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
                  type="password"
                  id="confirm-new-password"
                />
                {errors?.confirmedPassword?.message && (
                  <p className="error-message">
                    {errors?.confirmedPassword?.message}
                  </p>
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
      </div>
    </Container>
  );
};

export default ResetPassword;
