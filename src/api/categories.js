import server from "./server";

export const getAllCategoriesApi = async (cookies) => {
  const response = await server(cookies).get("/categories");
  return response.data;
};

export const getSingleCategoryApi = async (payload) => {
  const { cookies = {}, categoryId } = payload;
  const response = await server(cookies).get(`/categories/${categoryId}`);

  return response.data;
};
