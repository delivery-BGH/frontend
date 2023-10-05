import { z } from "zod";

export const createUserFormSchema = z.object({
    nome: z.string().nonempty("Nome obrigatório"),
    preco: z.string().nonempty("Obrigatório"),
    descricao: z.string().nonempty("Obrigatório"),
    precoPromocional: z.string().nonempty("Obrigatório"),
    categoria: z.string().nonempty("Informe uma categoria"),
    urlImg: z.string().refine(
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

  