import server from "./server";

export const getAllBrandsApi = async (cookie) => {
  const response = await server(cookie).get("/brands");
  return response.data;
};
