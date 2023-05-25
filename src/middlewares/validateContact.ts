import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact, User } from "../entities";
import { AppError } from "../errors";

export const validateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const find = await contactRepository.findBy({
    id: id,
  });

  if (find.length === 0) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
