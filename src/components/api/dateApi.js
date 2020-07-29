import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3010/dateSlots/";

export function getDates() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getDateByDate(date) {
  return fetch(baseUrl + "?date=" + date)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(dates => {
        if (dates.length !== 1) throw new Error("Date not found: " + date);
        return dates[0]; // should only find one date for a given date, so return it.
      });
    })
    .catch(handleError);
}

export function saveDate(date) {
  debugger;
  return fetch(baseUrl + (date.id || ""), {
    method: date.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...date
      // Parse authorId to a number (in case it was sent as a string).
      // authorId: parseInt(date.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}
