import React from "react";
import Orders from "@/components/orders/Index";
import nookies from "nookies";
import { wrapper } from "@/store";
const OrdersPage = () => {
  return <Orders />;
};

export default OrdersPage;
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
