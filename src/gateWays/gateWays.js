const baseUrl = "https://5e64c3daa49c210016106bc4.mockapi.io/users";

export const createUser = (user) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  });
};
