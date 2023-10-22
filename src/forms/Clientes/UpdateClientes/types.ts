import { z } from "zod";
import { updateUserSchema } from "./schema";

export type UpdateUser = z.infer<typeof updateUserSchema>;