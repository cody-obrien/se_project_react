const checkResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(`Error: ${response.status}`);
  }

  return response.json();
};

export { checkResponse };
