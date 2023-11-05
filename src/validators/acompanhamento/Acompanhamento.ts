import { z } from "zod";

export const acompanhamentosSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  avaliable: z.boolean(),
});

export type Acompanhamento = z.infer<typeof acompanhamentosSchema>;
