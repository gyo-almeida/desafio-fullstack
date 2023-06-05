import { Request, Response } from "express";
import { iUserReq, iUserUpdate } from "../interfaces/users";
import { getUser } from "../services/users/getUser";
import { updateUser } from "../services/users/updateUser";
import { deleteUser } from "../services/users/deleteUser";
import { getUserById } from "../services/users/getUserById";
import { createContact } from "../services/contacts/createContact";
import { getContacts } from "../services/contacts/getContacts";
import { getContactById } from "../services/contacts/getContactById";
import { updateContact } from "../services/contacts/updateContact";
import { deleteContact } from "../services/contacts/deleteContact";

export async function CreateContactController(
  req: Request,
  resp: Response
): Promise<Response> {
  const userId = req.user.id;
  const contactData = req.body;

  const contact = await createContact(userId, contactData);

  return resp.status(201).json(contact);
}

export async function getContactsController(
  req: Request,
  resp: Response
): Promise<Response> {
  const userId = req.user.id;

  const contacts = await getContacts(userId);

  return resp.json(contacts);
}

export async function getContactByIdController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const userId = req.user.id;

  const contact = await getContactById(userId, id);

  return resp.json(contact);
}

export async function updateContactController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const userId = req.user.id;
  const contactData = req.body;

  const newContact = await updateContact(id, userId, contactData);

  return resp.json(newContact);
}

export async function deleteContactController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const tokenId = req.user.id;

  await deleteContact(id, tokenId);

  return resp.status(204).json();
}
