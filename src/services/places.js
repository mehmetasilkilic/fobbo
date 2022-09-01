import restApiClient from "./client";

export async function getPlaceList(pageNo) {
  const response = await restApiClient({
    url: "/places?page=" + pageNo,
    method: "get",
  });
  return response;
}
