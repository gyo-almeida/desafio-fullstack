import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { iMultipleContacts } from "../../interfaces/contacts";
import { multipleContacts } from "../../schemas/contacts";
import { AppError } from "../../errors";

export async function getContacts(userId: number): Promise<iMultipleContacts> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
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

  const contactList = multipleContacts.parse(contacts);

  return contactList;
}
