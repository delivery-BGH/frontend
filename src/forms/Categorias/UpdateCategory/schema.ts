import { z } from "zod";

export const updateCategoryFormSchema = z.object({
  name: z.string().nonempty("Nome Obrigatório!"),
  description: z.string().nonempty("Descrição obrigatória"),
});
