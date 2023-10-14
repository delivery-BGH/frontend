import { z } from "zod";

export const updateProductSchema = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  price: z.coerce.number(),
  description: z.string().nonempty("Obrigatório"),
  promotionalPrice: z.coerce.number(),
  // category: z.object({
  //   _id: z.string(),
  //   name: z.string(),
  //   description: z.string()
  // }),
  category: z.string(),
  img: z.string().refine(
    (value) => {
      // Adicione sua lógica de validação personalizada para a URL aqui
      // Por exemplo, você pode usar uma expressão regular para verificar se é uma URL válida.
      // Aqui está um exemplo simples que verifica se a URL começa com "http://" ou "https://":
      return value.startsWith("http://") || value.startsWith("https://");
    },
    {
      message: "URL inválida",
    }
  ),
  
  activePromotion: z.boolean(),
  avaliable: z.boolean()
});
