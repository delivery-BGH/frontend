import { z } from "zod";
import { categoriaSchema } from "../categoria/Categoria";
import { acompanhamentosSchema } from "../acompanhamento/Acompanhamento";

export const productSchema = z.object({
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  promotionalPrice: z.number(),
  category: categoriaSchema,
  sideDish: z.array(acompanhamentosSchema),
  img: z.string(),
  avaliable: z.boolean(),
  activePromotion: z.boolean(),
});

export type Produto = z.infer<typeof productSchema>;
