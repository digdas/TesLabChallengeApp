import { z } from "zod";

export const notificationSchema = z.object({
  id: z.number(),
  text: z.string(),
  date: z.coerce.date(),
});
