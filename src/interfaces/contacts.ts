import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  ContactRespWithoutUser,
  contactReqSchema,
  contactRespSchema,
  multipleContacts,
} from "../schemas/contacts";

export type iContactReq = z.infer<typeof contactReqSchema>;
export type iContactResp = z.infer<typeof contactRespSchema>;
export type iContactRespWithoutUser = z.infer<typeof ContactRespWithoutUser>;
export type iMultipleContacts = z.infer<typeof multipleContacts>;
export type iContactUpdate = DeepPartial<iContactReq>;
