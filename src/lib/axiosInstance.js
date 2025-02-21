import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL; // Use environment variables

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds timeout
});

// ? in case of u want add a token to ur request headers
// axiosInstance.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

export default axiosInstance;
