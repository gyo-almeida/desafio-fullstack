import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  name: z.string().max(45),
  password: z.string().min(4).max(20),
  cellPhone: z
    .number()
    .or(
      z.string().max(11, "O número deve conter 11 caracteres, incluindo o DDD")
    ),
});

export type RegisterData = z.infer<typeof schema>;
