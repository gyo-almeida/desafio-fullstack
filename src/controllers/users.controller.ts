import { Request, Response } from "express";
import { iUserReq } from "../interfaces/users";
import { createUser } from "../services/users/createUser";
import { getUser } from "../services/users/getUser";

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
  return resp.json();
}

export async function updateUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  return resp.json();
}

export async function deleteUserController(
  req: Request,
  resp: Response
): Promise<Response> {
  return resp.status(204).json();
}
