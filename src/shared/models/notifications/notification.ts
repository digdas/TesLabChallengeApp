import { z } from "zod";
import { notificationSchema } from "@services/notifications/schemas";

export type Notification = z.infer<typeof notificationSchema>;
