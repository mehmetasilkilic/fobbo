import restApiClient from "./client";

export async function getFavourites(userId) {
  const response = await restApiClient({
    url: `/users?filter[id]=${userId}&include=favorites`,
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
