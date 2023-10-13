import { z } from "zod";

export const createCategoryFormSchema = z.object({
  name: z.string().nonempty("Nome Obrigatório!"),
  description: z.string().nonempty("Descrição obrigatória")
})