import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken";

const service = axios.create({
  baseURL: "https://fobbo.app/api",
});

service.interceptors.request.use(
  async (config) => {
    config.headers = { "Content-Type": "application/json" };
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
