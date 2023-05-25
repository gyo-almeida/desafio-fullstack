import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../errors";

export async function deleteContact(
  id: number,
  tokenId: number
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({
    id: tokenId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contacts: Contact[] = await contactsRepository.find({
    where: {
      user: {
        id: user.id,
      },
    },
  });

  const contact = contacts.find((contact) => contact.id === id);

  await contactsRepository.remove(contact!);
}
