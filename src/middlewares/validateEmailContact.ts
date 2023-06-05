import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact, User } from "../entities";
import { AppError } from "../errors";

export const validateEmailContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findEmail = await contactRepository.findBy({
    email: email,
  });

  if (findEmail.length > 0) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
