import { z } from "zod";
import { updateProductSchema } from "./schema";

export type UpdateProduct = z.infer<typeof updateProductSchema>;
