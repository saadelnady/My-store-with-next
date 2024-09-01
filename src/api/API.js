import axios from "axios";

const serverUrl = "https://ecommerce.routemisr.com/api/v1";

const handleRequest = async (method, URL, data = null) => {
  const headers = {
    token: localStorage.getItem("TOKEN"),
  };

  const response = await axios({
    method,
    url: `${serverUrl}${URL}`,
    // headers,
    data,
  });

  return response.data;
};

export const getData = async (URL) => {
  return handleRequest("get", URL);
};

export const postData = async (URL, data) => {
  return handleRequest("post", URL, data);
};

export const putData = async (URL, data) => {
  return handleRequest("put", URL, data);
};

export const deleteData = async (URL) => {
  return handleRequest("delete", URL);
};
