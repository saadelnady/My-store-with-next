import { wrapper } from "@/store";
import SignUpComponent from "../src/components/sign-up";
import nookies from "nookies";

const SignUp = () => {
  return (
    <div>
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
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
