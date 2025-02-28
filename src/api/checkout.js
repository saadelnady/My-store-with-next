import server from "./server";

export const postCheckoutApi = async ({ cartId, data, cookies }) => {
  const response = await server(cookies).post(
    `/orders/checkout-session/${cartId}/?url=https://e-commerce-kohl-six-88.vercel.app`,
    data
  );
  return response.data;
};
