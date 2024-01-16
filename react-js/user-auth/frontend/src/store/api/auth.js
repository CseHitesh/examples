import axiosInstance from "./api";

export const registerApi = async (data) => {
  try {
    const response = await axiosInstance.post("/users/register/", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const loginApi = async (data) => {
  try {
    const response = await axiosInstance.post("/users/login/", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
