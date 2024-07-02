import { api } from "services/api";
import { notificationListSchema } from "./schemas";

export default async () => {
  const response = await api.get("7a67e1af-9063-4d86-aef5-11916a76a049").json();

  return notificationListSchema.parse(response);
};
