import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import userRepository from "../repositories/userRepository";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateUser = async (email: string, password: string) => {
  const UserRepository = getCustomRepository(userRepository);
  const user = await UserRepository.findByEmail(email);

  if (user === undefined || !bcrypt.compareSync(password, user.password)) {
    return undefined;
  }

  const token = jwt.sign({ id: user.uuid }, SECRET_KEY as string, {
    expiresIn: "1d",
  });

  return token;
};
