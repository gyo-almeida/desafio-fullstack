import { z } from "zod";
import { userRespSchema } from "./users";

export const contactReqSchema = z.object({
  email: z.string().email(),
  name: z.string().max(45),
  cellPhone: z.number().or(z.string()),
});

export const contactRespSchema = contactReqSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  user: userRespSchema.omit({ id: true }),
});

export const ContactRespWithoutUser = contactReqSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    user: userRespSchema,
  })
  .omit({ user: true });

export const multipleContacts = ContactRespWithoutUser.array();

export const updatecontactSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().optional(),
  password: z.string().min(4).max(20).optional(),
  cellPhone: z.number().or(z.string()).optional(),
});
