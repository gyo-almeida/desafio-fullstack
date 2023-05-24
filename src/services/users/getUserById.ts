import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserResp } from "../../interfaces/users";
import { userRespSchema } from "../../schemas/users";
import { AppError } from "../../errors";

export async function getUserById(
  id: number,
  tokenId: number
): Promise<iUserResp> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (id !== tokenId && tokenId !== user?.id) {
    throw new AppError("Insufficient permission", 403);
  }

  const userById = userRespSchema.parse(user);

  return userById;
}
