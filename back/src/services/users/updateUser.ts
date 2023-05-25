import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserResp, iUserUpdate } from "../../interfaces/users";
import { userRespSchema } from "../../schemas/users";
import { AppError } from "../../errors";

export async function updateUser(
  id: number,
  userData: iUserUpdate,
  tokenId: number
): Promise<iUserResp> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (id !== tokenId && tokenId !== user?.id) {
    throw new AppError("Insufficient permission", 403);
  }

  const newUser = userRepository.create({
    ...user,
    ...userData,
  });

  await userRepository.save(newUser);

  const userUpdate = userRespSchema.parse(newUser);

  return userUpdate;
}
