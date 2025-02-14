import server from "./server";

export const postAddProductToWishlistApi = async ({ cookies = {}, data }) => {
  const response = await server(cookies).post("/wishlist", data);
  return response.data;
};
// ----------------------------------------------------------------------------
export const getWishlistApi = async ({ cookies = {} }) => {
  const response = await server(cookies).get("/wishlist");
  return response.data;
};
// ----------------------------------------------------------------------------
export const deleteProductFromWishlistApi = async ({
  cookies = {},
  productId,
}) => {
  const response = await server(cookies).delete(`/wishlist/${productId}`);

  return response.data;
};
