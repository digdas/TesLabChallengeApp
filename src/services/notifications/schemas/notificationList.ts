import { z } from "zod";
import { notificationSchema } from "./notification";

export const notificationListSchema = z.object({
  page: z.number().optional(),
  returnedCount: z.number().optional(),
  totalCount: z.number().optional(),
  notifications: z.array(notificationSchema),
});
