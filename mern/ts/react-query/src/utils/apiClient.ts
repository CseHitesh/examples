import axios, { AxiosInstance } from "axios";

// Create an Axios instance with common configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/", // Replace with your API base URL
  timeout: 10000, // Optional timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// // Create a request interceptor (optional)
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // You can modify the request config here, e.g., add authorization headers

//     // const token = localStorage.getItem("token"); // Get token from localStorage or other storage

//     const token = "dummyToken";
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Create a response interceptor (optional)
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error) => {
//     // Handle errors globally
//     return Promise.reject(error);
//   }
// );

export default apiClient;
