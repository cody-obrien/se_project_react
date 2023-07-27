const baseUrl = "http://localhost:3001";

function checkResponse(response) {
  if (!response.ok) {
    return Promise.reject(`Error: ${response.status}`);
  }

  return response.json();
}
function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function postItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
      //   id: item.id,
    }),
  }).then(checkResponse);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/:${id}`, { method: "DELETE" }).then(
    checkResponse
  );
}

export { getItems, postItem, deleteItem };
