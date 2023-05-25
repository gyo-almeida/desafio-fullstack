import { z } from "zod";
import { loginSchema } from "../schemas/login";

export type iLogin = z.infer<typeof loginSchema>;
