import restApiClient from "./client";

export async function getFavourites(userId) {
  const response = await restApiClient({
    url: "/users?include=favorites&filter[id]=" + userId,
    method: "get",
  });
  return response;
}

export async function addToFavourites(placeId) {
  const response = await restApiClient({
    url: "/users/favorites/" + placeId,
    method: "post",
  });
  return response;
}

export async function removeFromFavourites(placeId) {
  const response = await restApiClient({
    url: "/users/favorites/" + placeId,
    method: "delete",
  });
  return response;
}