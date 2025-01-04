import server from "./server";

export const getAllBrandsApi = async (cookies) => {
  const response = await server(cookies).get("/brands");
  return response.data;
};
