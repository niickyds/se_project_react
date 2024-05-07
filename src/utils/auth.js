import { request, processServerResponse } from "./api.js";
export const baseUrl = "http://localhost:3001";

export function signUp({ name, avatar, email, password }) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(processServerResponse);
}

export function signIn({ email, password }) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResponse);
}

export const checkToken = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

export function editProfileData(data, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      avatar: data.avatar,
    }),
  }).then(processServerResponse);
}
