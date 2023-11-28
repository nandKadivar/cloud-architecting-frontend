import axios from "axios";

// axios instance for making requests
const axiosInstance = axios.create({
  baseURL: "http://backend-nlb-c78efa861b0e6cc0.elb.us-east-1.amazonaws.com:8080",
});

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});

export default axiosInstance;
