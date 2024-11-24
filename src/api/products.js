import server from "./server";

export const getAllProductsApi = async (cookie) => {
  const response = await server(cookie).get("/products");
  return response.data;
};
