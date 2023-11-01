import { z } from "zod";

export const updateAcompanhamentoFormSchema = z.object({
    name: z.string().nonempty("Nome Obrigatório!"),
    description: z.string().nonempty("Descrição obrigatória"),
    price: z.coerce.number(),
    avaliable: z.boolean()
  });
  