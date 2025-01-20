import server from "./server";

export const postAddToCartApi = async ({ cookies = {}, data }) => {
  const response = await server(cookies).post("/cart", data);
  return response.data;
};
// ----------------------------------------------------------------------------
export const getCartApi = async ({ cookies = {} }) => {
  const response = await server(cookies).get("/cart");
  return response.data;
};
// ----------------------------------------------------------------------------
export const editCartApi = async ({ cookies = {}, productId, data }) => {
  const response = await server(cookies).put(`/cart/${productId}`, data);
  return response.data;
};
// ----------------------------------------------------------------------------
export const deleteCartItemApi = async ({ cookies = {}, productId }) => {
  const response = await server(cookies).delete(`/cart/${productId}`);
  return response.data;
};
// ----------------------------------------------------------------------------
export const deleteCartItemsApi = async ({ cookies = {} }) => {
  const response = await server(cookies).delete(`/cart`);
  return response.data;
};
