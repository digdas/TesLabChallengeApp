import ky from "ky";

const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ""}`;

export const api = ky.extend({
  prefixUrl,
  headers: {
    Accept: "application/json",
  },
});
