import axiosInstance from "./api";

export const getUsersApi = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
