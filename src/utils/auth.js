import { baseUrl } from "./api.js";
import { request } from "./api.js";

export function signUp({ name, avatar, email, password }) {
  return (request(`${baseUrl}/signup`),
  {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((data) => {
    if (data.error) {
      console.log(data.error);
      throw new Error(data.error);
    }
  });
}

export function signIn({ email, password }) {
  return (request(`${baseUrl}/signin`),
  {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (data.error) {
      console.log(data.error);
      throw new Error(data.error);
    }
  });
}

export const checkToken = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
