import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iMultipleUsers, iUserReq } from "../../interfaces/users";
import { multipleUsers } from "../../schemas/users";

export async function getUser(): Promise<iMultipleUsers> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: Array<User> = await userRepository.find();

  const userList = multipleUsers.parse(user);

  return userList;
}
