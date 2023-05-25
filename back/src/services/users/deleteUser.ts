import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export async function deleteUser(id: number, tokenId: number): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (id !== tokenId && tokenId !== user?.id) {
    throw new AppError("Insufficient permission", 403);
  }

  await userRepository.remove(user!);
}
