import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { iContactRespWithoutUser } from "../../interfaces/contacts";
import { AppError } from "../../errors";
import { ContactRespWithoutUser } from "../../schemas/contacts";

export async function getContactById(
  userId: number,
  id: number
): Promise<iContactRespWithoutUser> {
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

  const oneContact: Contact | undefined = contacts.find(
    (contact) => contact.id === id
  );

  const contactById = ContactRespWithoutUser.parse(oneContact);

  return contactById;
}
