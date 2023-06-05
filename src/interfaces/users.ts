import { DeepPartial } from "typeorm";
import { z } from "zod";
import { userReqSchema, userRespSchema, multipleUsers } from "../schemas/users";

export type iUserReq = z.infer<typeof userReqSchema>;
export type iUserResp = z.infer<typeof userRespSchema>;
export type iMultipleUsers = z.infer<typeof multipleUsers>;
export type iUserUpdate = DeepPartial<iUserReq>;
