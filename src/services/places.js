import restApiClient from "./client";

export async function getPlaceList() {
  const response = await restApiClient({
    url: "/places?page=1",
    method: "get",
  });
  return response;
}
