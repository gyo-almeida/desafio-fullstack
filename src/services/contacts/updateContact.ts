import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import {
  iContactRespWithoutUser,
  iContactUpdate,
} from "../../interfaces/contacts";
import { ContactRespWithoutUser } from "../../schemas/contacts";
import { AppError } from "../../errors";

export async function updateContact(
  id: number,
  tokenId: number,
  contactData: iContactUpdate
): Promise<iContactRespWithoutUser> {
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

  const oneContact: Contact | undefined = contacts.find(
    (contact) => contact.id === id
  );

  const newContact = contactsRepository.create({
    ...oneContact,
    ...contactData,
  });

  await contactsRepository.save(newContact);

  const updateContact = ContactRespWithoutUser.parse(newContact);

  return updateContact;
}
