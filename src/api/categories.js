import server from "./server";

export const getAllCategoriesApi = async (cookie) => {
  const response = await server(cookie).get("/categories");
  return response.data;
};
