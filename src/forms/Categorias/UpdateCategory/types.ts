import { z } from "zod";
import { updateCategoryFormSchema } from "./schema";



export type updateCategoryForm = z.infer<typeof updateCategoryFormSchema>