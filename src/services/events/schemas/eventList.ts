import { z } from "zod";
import { eventSchema } from "./event";

export const eventListSchema = z.object({
  page: z.number().optional(),
  returnedCount: z.number().optional(),
  totalCount: z.number().optional(),
  events: z.array(eventSchema),
});
