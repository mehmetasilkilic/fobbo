import restApiClient from "./client";

export async function getPlaceList(query) {
  const response = await restApiClient({
    url: "/places" + query,
    method: "get",
  });
  return response;
}
