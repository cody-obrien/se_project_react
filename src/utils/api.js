import { baseUrl } from "./constants";
import { checkResponse } from "./utils";

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function postItem(item) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  }).then(checkResponse);
}

function deleteItem(id) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { getItems, postItem, deleteItem };
