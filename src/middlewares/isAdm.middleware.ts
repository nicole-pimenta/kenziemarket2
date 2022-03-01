import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import userRepository from "../repositories/userRepository";
import { getCustomRepository } from "typeorm";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = getCustomRepository(userRepository);
  const { uuid } = req.params;

  try {
    const token = req.headers!.authorization?.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      async (err: any, decoded: any) => {
        const userUuid = decoded.id;

        const user: any = await usersRepository.findOne(userUuid);

        if (user?.isAdm == false) {
          if (uuid !== decoded.id) {
            res
              .status(401)
              .json({ message: "Not allowed to search this user" });
          } else {
            const user: any = await usersRepository.findOne(userUuid);
            res.status(200).json({ user });
          }
        } else {
          const usernew: any = await usersRepository.findOne(uuid);

          res.status(200).json({ usernew });
        }
      }
    );
  } catch (error) {
    return res.status(401).json({ message: "error" });
  }
};
