import { z } from "zod";

export const EditSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().max(45).optional(),
  cellPhone: z.number().or(z.string()).optional(),
});

export type EditData = z.infer<typeof EditSchema>;
