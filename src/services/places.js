import restApiClient from "./client";

export async function getPlaceList() {
  try {
    const endpoint = "https://fobbo.app/api/places?page=1";
    const response = await restApiClient.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("error", error);
    return error;
  }
}
