const baseUrl = "http://localhost:3001";

export function signUp({ name, avatar, email, password }) {
  return (request(`${baseUrl}/signup`),
  {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((data) => {
    if (data.err) {
      console.log(err);
      throw new Error(data.err);
    }
  });
}

export function signIn(email, password) {
  return (request(`${baseUrl}/signin`),
  {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  }).then((data) => {
    if (data.err) {
      console.log(err);
      throw new Error(data.err);
    }
  });
}
