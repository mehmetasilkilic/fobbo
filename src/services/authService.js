import restApiClient from "./client";

export async function login(data) {
  //
  data.device_name = "iphone3gs";
  //
  const response = await restApiClient({
    url: "/token",
    method: "post",
    data: data,
  });
  return response;
}

export async function register(data) {
  //
  data.device_name = "iphone3gs";
  //
  const response = await restApiClient({
    url: "/register",
    method: "post",
    data: data,
  });
  return response;
}
