import { wrapper } from "@/store";
import ForgetPassword from "../src/components/forget-password";
import nookies from "nookies";

const ForgetPasswordPage = () => {
  return <ForgetPassword />;
};

export default ForgetPasswordPage;
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
