import server from "./server";

export const postUserLoginApi = async ({ data, cookies }) => {
  const response = await server(cookies).post("/auth/signin", data);
  return response.data;
};
export const postUserSignupApi = async ({ data, cookies }) => {
  const response = await server(cookies).post("/auth/signup", data);
  return response.data;
};
export const postUserForgetPasswordApi = async ({ data, cookies = {} }) => {
  const response = await server(cookies).post("/auth/forgotPasswords", data);
  return response.data;
};
export const postUserOtpApi = async ({ data, cookies = {} }) => {
  const response = await server(cookies).post("/auth/verifyResetCode", data);
  return response.data;
};
export const editUserPasswordApi = async ({ data, cookies = {} }) => {
  const response = await server(cookies).put("/auth/resetPassword", data);
  return response.data;
};
