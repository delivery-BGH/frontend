import { z } from "zod";

export const updateUserSchema = z.object({
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
  document: z
    .string()
    .min(11, "O tamanho do CPF deve ser de 11 números")
    .max(11, "Ultrapassou o limite de 11 números"),
  phoneNumber: z.coerce.number(),
  zipCode: z
    .string()
    .min(8, "O tamanho do CEP deve ser 8 números")
    .max(8, "Ultrapassou 8 números"),
  city: z.string().nonempty("O nome da cidade é obrigatório"),
  neighborhood: z.string().nonempty("O nome do Bairro é obrigatório"),
  street: z.string().nonempty("O nome da Rua é obrigatório"),
  number: z.string().min(2, "Deve possuir pelo menos 2 números"),
});
