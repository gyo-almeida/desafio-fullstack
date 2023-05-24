import { Request, Response } from "express";
import { iUserReq } from "../interfaces/users";
import { createUser } from "../services/users/createUser";

export async function CreateUser(
  req: Request,
  resp: Response
): Promise<Response> {
  const userData: iUserReq = req.body;

  const user = await createUser(userData);

  return resp.status(201).json(user);
}

export async function getUsers(
  req: Request,
  resp: Response
): Promise<Response> {
  return resp.json();
}

export async function getUserById(
  req: Request,
  resp: Response
): Promise<Response> {
  return resp.json();
}

export async function updateUser(
  req: Request,
  resp: Response
): Promise<Response> {
  return resp.json();
}

export async function deleteUser(
  req: Request,
  resp: Response
): Promise<Response> {
  return resp.status(204).json();
}
