import React from "react";
import Cart from "@/components/cart";
import nookies from "nookies";
import { wrapper } from "@/store";

const CartPage = () => {
  return <Cart />;
};
export default CartPage;

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
