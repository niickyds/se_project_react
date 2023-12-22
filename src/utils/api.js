import { processServerResponse } from "./WeatherApi";

export const baseUrl = "http://localhost:3001";

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
}

export function postItems(values) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then(processServerResponse);
}

export function deleteItems(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
}

export function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}
