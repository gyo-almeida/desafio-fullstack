import { Repository } from "typeorm";
import { iLogin } from "../../interfaces/login";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export async function createLogin(loginData: iLogin): Promise<string> {
  const loginRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await loginRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
}
