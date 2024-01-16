import axios from "axios";
const apiUrl = " http://localhost:8080/api/v1";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "token";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses globally
    return response;
  },
  (error) => {
    // Handle global error responses or specific status codes
    return Promise.reject(error);
  }
);

export default axiosInstance;
