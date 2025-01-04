import server from "./server";

export const getAllProductsApi = async ({ cookies = {}, page, limit }) => {
  const response = await server(cookies).get(
    `/products?limit=${limit}&page=${page}`
  );
  return response.data;
};
export const getSingleProductApi = async ({ cookies, slug }) => {
  const response = await server(cookies).get(`/products?slug=${slug}`);
  return response.data;
};
