import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem("accessToken");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("failed to get access token", e);
  }
};

axios.interceptors.request.use(
  async (config) => {
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

export default axios;
