import { z } from "zod";
import { eventSchema } from "@services/events/schemas";

export type Event = z.infer<typeof eventSchema>;
