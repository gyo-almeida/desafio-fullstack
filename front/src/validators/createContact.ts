import { z } from "zod";

export const createContactSchema = z.object({
  email: z.string().email(),
  name: z.string().max(45),
  cellPhone: z.number().or(z.string()),
});

export type createContactData = z.infer<typeof createContactSchema>;
