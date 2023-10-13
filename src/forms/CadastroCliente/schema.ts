import { z } from "zod";

export const cadastroClienteSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato de E-mail inválido")
    .toLowerCase(),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
  cpf: z
    .string()
    .min(11, "O tamanho do CPF deve ser de 11 números")
    .max(11, "Ultrapassou o limite de 11 números"),
  celular: z
    .string()
    .min(11, "O tamanho do número de celular é 11")
    .max(11, "Ultrapassou 11 números"),
  cep: z
    .string()
    .min(8, "O tamanho do CEP deve ser 8 números")
    .max(8, "Ultrapassou 9 números"),
  cidade: z.string().nonempty("O nome da cidade é obrigatório"),
  bairro: z.string().nonempty("O nome do Bairro é obrigatório"),
  rua: z.string().nonempty("O nome da Rua é obrigatório"),
  numero: z.string().min(2, "Deve possuir pelo menos 2 números"),
});
