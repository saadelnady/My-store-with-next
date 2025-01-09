import server from "./server";

export const getAllBrandsApi = async (cookies = {}) => {
  const response = await server(cookies).get("/brands");
  return response.data;
};
export const getSingleBrandApi = async (payload) => {
  const { cookies = {}, brandId } = payload;
  const response = await server(cookies).get(`/brands/${brandId}`);
  return response.data;
};
