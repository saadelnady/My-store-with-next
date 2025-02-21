import server from "./server";

export const getOrdersApi = async ({ cookies = {}, userId }) => {
  const response = await server(cookies).get(`/orders/user/${userId}`);
  return response.data;
};
