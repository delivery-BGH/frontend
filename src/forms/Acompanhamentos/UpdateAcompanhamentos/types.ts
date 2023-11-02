import { z } from "zod";
import { updateAcompanhamentoFormSchema } from "./schema";

export type UpdateAcompanhamentoForm = z.infer<
  typeof updateAcompanhamentoFormSchema
>;
