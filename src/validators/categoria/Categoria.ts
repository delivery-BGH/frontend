import { z } from "zod";

export const categoriaSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  img: z.string(),
});

export type Categoria = z.infer<typeof categoriaSchema>;
