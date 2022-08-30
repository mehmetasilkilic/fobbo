import restApiClient from "./client";

export async function getPlaceList() {
  const endpoint = "https://fobbo.app/api/places?page=1";
  const response = await restApiClient.get(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}
