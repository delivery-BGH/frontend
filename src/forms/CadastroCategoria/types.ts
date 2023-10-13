import { z } from "zod";
import { createCategoryFormSchema } from "./schema";

export type createCategoryForm = z.infer<typeof createCategoryFormSchema>;
