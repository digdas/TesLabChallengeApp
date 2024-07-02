import { api } from "services/api";
import { eventListSchema } from "./schemas";

export default async () => {
  const response = await api.get("7b134bcc-a751-4053-acf9-33a226d0d848").json();

  return eventListSchema.parse(response);
};
