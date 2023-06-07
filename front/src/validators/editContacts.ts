import { z } from "zod";

export const EditSchema = z.object({
  email: z.string().email().optional().nullable(),
  name: z.string().max(45).optional().nullable(),
  cellPhone: z.number().or(z.string()).optional().nullable(),
});

export type EditData = z.infer<typeof EditSchema>;
