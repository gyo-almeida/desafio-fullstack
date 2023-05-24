import { z } from "zod";

export const userReqSchema = z.object({
  email: z.string().email(),
  name: z.string().max(45),
  password: z.string().min(4).max(20),
  cellPhone: z.number().or(z.string()),
});

export const userRespSchema = userReqSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
  })
  .omit({ password: true });

export const multipleUsers = userRespSchema.array();

export const updateUserSchema = z
  .object({
    name: z.string().max(45).optional(),
    email: z.string().email().optional(),
    password: z.string().min(4).max(20).optional(),
    cellPhone: z.number().or(z.string()).optional(),
  })
  .omit({ password: true });
