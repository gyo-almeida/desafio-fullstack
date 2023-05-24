import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserReq, iUserResp } from "../../interfaces/users";
import { userRespSchema } from "../../schemas/users";

export async function createUser(userData: iUserReq): Promise<iUserResp> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = userRespSchema.parse(user);

  return newUser;
}
