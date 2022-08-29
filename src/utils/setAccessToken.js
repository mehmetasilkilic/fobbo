import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAccessToken = async (value) => {
  try {
    await AsyncStorage.setItem(
      "accessToken",
      value?.payload?.access_token ?? null
    );
  } catch (e) {
    // save error
  }
};
