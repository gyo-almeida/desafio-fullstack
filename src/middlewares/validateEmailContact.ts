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

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    id: req.user.id,
  });

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const findEmail = await contactRepository.find({
    where: {
      email: email,
      user: {
        id: user?.id,
      },
    },
  });

  if (findEmail.length > 0) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
