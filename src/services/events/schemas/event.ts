import { z } from "zod";

export const eventSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  date: z.coerce.date(),
});
