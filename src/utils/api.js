import { processServerResponse } from "./WeatherApi";

export const baseUrl = "http://localhost:3001";

export function getItems() {
  // write fetch based return statement (return fetch())
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("")}
    },
  }).then(processServerResponse);
}

export function postItems(values) {
  // write fetch based return statement (return fetch()) but with POST method then stringify
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then(processServerResponse);
}

export function deleteItems(id) {
  // write fetch based return statement (return fetch()) but with DELETE method
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
