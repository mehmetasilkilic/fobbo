import restApiClient from "./client";

export async function login(data) {
  //
  data.device_name = "iphone3gs";
  //
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
}

export async function register(data) {
  //
  data.device_name = "iphone3gs";
  //
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
}
