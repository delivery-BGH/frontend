import { z } from "zod";
import { createAcompanhamentoFormSchema } from "./schema";



export type createAcompanhamentoForm = z.infer<typeof createAcompanhamentoFormSchema>;