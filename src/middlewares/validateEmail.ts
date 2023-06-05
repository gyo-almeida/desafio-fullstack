import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findEmail = await userRepository.findBy({
    email: email,
  });

  if (findEmail.length > 0) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
