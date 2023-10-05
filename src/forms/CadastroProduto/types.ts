import { z } from "zod";
import { createUserFormSchema } from "./shcema";

export type createUserFormData = z.infer<typeof createUserFormSchema>;