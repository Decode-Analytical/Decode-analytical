import Axios from "axios";
import { ErrorToast } from "../utils/toast";
import {
  getHasDisplayedTokenError,
  setHasDisplayedTokenError,
} from "../utils/errorFlag";

const axios = Axios.create({
  //   baseURL: process.env.VITE_BASE_URL,
  baseURL: "https://decode-mnjh.onrender.com/api/",
  headers: { "Content-Type": "application/json" },
});

const axiosConfiguration = (config) => {
  const user = localStorage.getItem("user");
  const token = user ? JSON.parse(user).token : null;
  if (token) {
    config.headers = {
      ...(config.headers || {}),
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

axios.interceptors.request.use(axiosConfiguration);
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (Axios.isAxiosError(error)) {
      const response = error?.response;
      const data = response?.data;

      if (response?.status === 401 && data?.message === "Token expired") {
        if (!getHasDisplayedTokenError) {
          setHasDisplayedTokenError(true);

          window.location.href = "/AdminLogin";
          ErrorToast("Token is invalid or expired. Please login to continue");
          localStorage.removeItem("user");
        }
        return Promise.reject(error);
      }

      if (response?.status === 400) {
        ErrorToast(data?.message || data?.detail || error.message);
        return Promise.reject(error);
      }

      ErrorToast(
        data?.detail || error.message || data?.message || "An error occurred"
      );
      return Promise.reject(error);
    }

    // In case error is not an instance of AxiosError
    ErrorToast("An unexpected error occurred");
    return Promise.reject(error);
  }
);

export default axios;
