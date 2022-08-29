import restApiClient from "./client";

export async function login(data) {
  try {
    if (data) {
      const endpoint = "https://fobbo.app/api/token";
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

export async function register(data) {
  try {
    if (data) {
      console.log("data", data);
      const endpoint = "https://fobbo.app/api/register";
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
