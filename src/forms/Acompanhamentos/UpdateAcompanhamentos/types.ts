import { z } from "zod";
import { updateAcompanhamentoFormSchema } from "./schema";

export type updateAcompanhamentoForm= z.infer<typeof updateAcompanhamentoFormSchema>;