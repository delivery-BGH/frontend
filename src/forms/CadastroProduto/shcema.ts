import {  z } from "zod";

export const createUserFormSchema = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  price: z.coerce.number()._parse(),
  description: z.string().nonempty("Obrigatório"),
  promotionalPrice: z.number(),
  category: z.string().nonempty("Informe uma categoria"),
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
    // promocaoAtiva: z.string(),
    // disponivel: z.string()
  });

  