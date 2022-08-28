import restApiClient from "./client";

export async function login(data) {
  try {
    if (data) {
      const endpoint = "https://fobbo.app/api";
      const response = await restApiClient.post(
        endpoint,
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response?.data);
      return response;
    } else {
      return {
        status: "error",
        message: "Please enter your username and password",
      };
    }
  } catch (error) {
    console.error("error", error);
    return error;
  }
}
