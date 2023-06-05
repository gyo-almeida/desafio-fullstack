import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findBy({
    id: id,
  });

  if (findUser.length === 0) {
    throw new AppError("User not found", 404);
  }

  return next();
};
