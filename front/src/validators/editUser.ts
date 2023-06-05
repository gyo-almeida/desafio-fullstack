import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().max(45).optional(),
  password: z.string().or(z.number()).optional(),
  cellPhone: z.number().or(z.string()).optional(),
});

export type UserData = z.infer<typeof UserSchema>;
