import { generateSquares } from "@/helpers/helpers";
import styles from "./styles/styles.module.scss";
const SignUp = () => {
  return (
    <div className="submit-page">
      <div className="squares">{generateSquares()}</div>
      <div className={styles["sign-up-form"]}>
        <h3>sign-up </h3>
        <div>
          <label htmlFor="name">User Name :</label>
          <input id="name" name="name" type="text" />
          <p name="name" className="error-message" />
        </div>

        <div>
          <label htmlFor="email">Email :</label>
          <input id="email" name="email" type="email" />
          <p className="error-message"></p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
          <p className="error-message"></p>
        </div>
        <div>
          <label htmlFor="rePassword">rePassword :</label>
          <input id="rePassword" name="rePassword" type="password" />
          <p className="error-message"></p>
        </div>
        <div>
          <label htmlFor="phone">Phone :</label>
          <input id="phone" name="phone" type="text" />
          <p className="error-message"></p>
        </div>

        <button className="btn" type="submit">
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUp;
