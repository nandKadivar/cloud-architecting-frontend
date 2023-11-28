import axios from "axios";

// axios instance for making requests
const axiosInstance = axios.create({
  baseURL: "http://public-app-nlb-992547abe09f1ef7.elb.us-east-1.amazonaws.com",
});

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});

export default axiosInstance;
