import { Request, Response } from "express";
import { iUserReq, iUserUpdate } from "../interfaces/users";
import { createUser } from "../services/users/createUser";
import { getUser } from "../services/users/getUser";
import { updateUser } from "../services/users/updateUser";
import { deleteUser } from "../services/users/deleteUser";
import { getUserById } from "../services/users/getUserById";

export async function CreateUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const userData: iUserReq = req.body;

  const user = await createUser(userData);

  return resp.status(201).json(user);
}

export async function getUsersController(
  req: Request,
  resp: Response
): Promise<Response> {
  const users = await getUser();

  return resp.json(users);
}

export async function getUserByIdController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const tokenId = req.user.id;

  const user = await getUserById(id, tokenId);

  return resp.json(user);
}

export async function updateUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const userData: iUserUpdate = req.body;
  const tokenId = req.user.id;

  const update = await updateUser(id, userData, tokenId);

  return resp.json(update);
}

export async function deleteUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  const id = Number(req.params.id);
  const tokenId = req.user.id;

  await deleteUser(id, tokenId);

  return resp.status(204).json();
}
