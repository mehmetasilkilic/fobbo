import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.interceptors.request.use(
  async (config) => {
    let accessToken;
    let applicationId;

    const getAccessToken = async () => {
      try {
        const value = await AsyncStorage.getItem("accessToken");
        if (value !== null) {
          accessToken = value;
        }
      } catch (e) {
        // error reading value
      }
    };
    const getApplicationId = async () => {
      try {
        const value = await AsyncStorage.getItem("applicationId");
        if (value !== null) {
          applicationId = value;
        }
      } catch (e) {
        // error reading value
      }
    };

    getAccessToken();
    getApplicationId();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (applicationId) {
      config.headers.Application = `${applicationId}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
