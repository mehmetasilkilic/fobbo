import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem("accessToken");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("failed to get access token", e);
  }
};
