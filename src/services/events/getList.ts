import EventListMockData from "./mock/eventListMockData.json";
import { eventListSchema } from "./schemas";

export default async () => {
  const response = EventListMockData;
  console.log("response ", response);
  return eventListSchema.parse(response);
};
