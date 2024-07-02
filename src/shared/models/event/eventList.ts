import { z } from "zod";
import { eventListSchema } from "@services/events/schemas";

export type EventList = z.infer<typeof eventListSchema>;
