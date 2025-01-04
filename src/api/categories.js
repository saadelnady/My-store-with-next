import server from "./server";

export const getAllCategoriesApi = async (cookies) => {
  const response = await server(cookies).get("/categories");
  return response.data;
};
