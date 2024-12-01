import server from "./server";

export const getAllProductsApi = async ({ cookies }) => {
  const response = await server(cookies).get("/products");
  return response.data;
};
export const getSingleProductApi = async ({ cookies, slug }) => {
  const response = await server(cookies).get(`/products?slug=${slug}`);
  return response.data;
};
