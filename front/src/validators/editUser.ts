import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email().nullish(),
  name: z.string().max(45).nullish(),
  password: z.string().or(z.number()).nullish(),
  cellPhone: z.number().or(z.string()).nullish(),
});

export type UserData = z.infer<typeof UserSchema>;
