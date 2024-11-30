import server from "./server";

export const postUserLoginApi = async ({ data, cookie }) => {
  const response = await server(cookie).post("/auth/signin", data);
  console.log(response.data);

  return response.data;
};
