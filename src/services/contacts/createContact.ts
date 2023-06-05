import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../errors";
import { contactRespSchema } from "../../schemas/contacts";
import { iContactReq, iContactResp } from "../../interfaces/contacts";

export async function createContact(
  userId: number,
  contactData: iContactReq
): Promise<iContactResp> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact = contactsRepository.create({
    ...contactData,
    user,
  });

  await contactsRepository.save(contact);

  const newContact = contactRespSchema.parse(contact);

  return newContact;
}
