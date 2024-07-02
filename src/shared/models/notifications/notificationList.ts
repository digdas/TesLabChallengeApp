import { z } from "zod";
import { notificationListSchema } from "@services/notifications/schemas";

export type NotificationList = z.infer<typeof notificationListSchema>;
