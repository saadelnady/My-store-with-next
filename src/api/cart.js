import server from "./server";

export const postAddToCartApi = async ({ cookies = {}, data }) => {
  const response = await server(cookies).post("/cart", data);
  return response.data;
};
// ----------------------------------------------------------------------------
export const getUserCartApi = async ({ cookies = {} }) => {
  const response = await server(cookies).get("/cart");
  return response.data;
};
