import restApiClient from "./client";

export async function getFavorites(userId) {
  const response = await restApiClient({
    url: "/users?include=favorites&filter[id]=" + userId,
    method: "get",
  });
  return response;
}

export async function addToFavorites(placeId) {
  const response = await restApiClient({
    url: "/users/favorites/" + placeId,
    method: "post",
  });
  return response;
}

export async function removeFromFavorites(placeId) {
  const response = await restApiClient({
    url: "/users/favorites/" + placeId,
    method: "delete",
  });
  return response;
}
