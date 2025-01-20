import React from "react";
import nookies from "nookies";
import { wrapper } from "@/store";

const Wishlist = () => {
  return <div>Wishlist</div>;
};

export default Wishlist;
export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (ctx) => {
    const cookies = nookies.get(ctx);
    const token = cookies.token;

    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return { props: {} };
  };
});
