import { z } from "zod";
import { createProductFormSchema } from "./shcema";

export type createProductForm = z.infer<typeof createProductFormSchema>;
