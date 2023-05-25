import { Router } from "express";
import {
  CreateContactController,
  deleteContactController,
  getContactsController,
  getContactByIdController,
  updateContactController,
} from "../controllers/contacts.controller";
import { validateData } from "../middlewares/validateData";
import { validateUser } from "../middlewares/validateUser";
import { validateToken } from "../middlewares/validateToken";
import { contactReqSchema, updatecontactSchema } from "../schemas/contacts";
import { validateEmailContact } from "../middlewares/validateEmailContact";
import { validateContact } from "../middlewares/validateContact";

export const contactRoutes = Router();

contactRoutes.post(
  "/",
  validateToken,
  validateData(contactReqSchema),
  validateEmailContact,
  CreateContactController
);
contactRoutes.get("", validateToken, getContactsController);
contactRoutes.get(
  "/:id",
  validateContact,
  validateToken,
  getContactByIdController
);
contactRoutes.patch(
  "/:id",
  validateUser,
  validateData(updatecontactSchema),
  validateToken,
  updateContactController
);
contactRoutes.delete(
  "/:id",
  validateUser,
  validateToken,
  deleteContactController
);
