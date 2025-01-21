import server from "./server";

export const postUserLoginApi = async ({ data, cookies }) => {
  const response = await server(cookies).post("/auth/signin", data);
  return response.data;
};
export const postUserSignupApi = async ({ data, cookies }) => {
  const response = await server(cookies).post("/auth/signup", data);
  return response.data;
};
