import LoginComponent from "../src/components/login/index.js";
import { wrapper } from "@/store/index.js";
import nookies from "nookies";

const Login = () => {
  return <LoginComponent />;
};

export default Login;

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (ctx) => {
    const cookies = nookies.get(ctx);
    const token = cookies.token;

    if (token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return { props: {} };
  };
});
