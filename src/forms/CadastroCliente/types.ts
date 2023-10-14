import { z } from "zod";
import { cadastroClienteSchema } from "./schema";

export type CadastroCliente = z.infer<typeof cadastroClienteSchema>