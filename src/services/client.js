import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem("accessToken");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

axios.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

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
