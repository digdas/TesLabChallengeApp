import { z } from "zod";
import { userSchema } from "@services/user/schemas";

export type User = z.infer<typeof userSchema>;
