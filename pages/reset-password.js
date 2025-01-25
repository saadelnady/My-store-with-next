import React from "react";
import { wrapper } from "@/store";
import nookies from "nookies";
import ResetPassword from "@/components/reset-password";

const ResetPasswordPage = () => {
  return <ResetPassword />;
};

export default ResetPasswordPage;
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
