import { User } from "../entities";
import { getRepository, getCustomRepository } from "typeorm";
import UserRepository from "../repositories/userRepository";
import { ErrorHandler } from "../utils/error";

interface UserBody {
  name: string;
  password: string;
  email: string;
  isAdm: boolean;
}

export const createUser = async (body: UserBody) => {
  const { name, email, password, isAdm } = body;

  try {
    const userRepository = getRepository(User);

    const user = userRepository.create(new User(email, password, name, isAdm));

    await userRepository.save(user);

    return user;
  } catch (error) {
    throw new ErrorHandler(409, "Email already exists");
  }
};

export const listUser = async (page = 1) => {
  const userRepository = getCustomRepository(UserRepository);

  const users = await userRepository.findPaginated(page);

  return users;
};

export const listByProfile = async (userUuid: string, data: any) => {
  const userRepository = getCustomRepository(UserRepository);

  console.log(userUuid);
  const user = await userRepository.findOne(userUuid);

  console.log(user);
  return user;
};
