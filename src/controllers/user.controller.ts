import { Request, Response, NextFunction } from "express";
import { createUser, listUser, listByProfile } from "../services/user.service";
import userRepository from "../repositories/userRepository";
import { getCustomRepository, getRepository } from "typeorm";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user.outputUser());
  } catch (error) {
    next(error);
  }
};

export const list = async (req: Request, res: Response) => {
  const pageQuery = req.query.page ? parseInt(req.query.page as string) : 1;
  const users = await listUser(pageQuery);

  res.send(users);
};

export const listById = async (req: Request, res: Response) => {
  const { uuid } = req.params;

  if (uuid == undefined) {
    return res.status(401).send({ message: "Missing token autorization" });
  }

  const listedUser = await listByProfile(uuid, req.body);

  res.send(listedUser);
};

export const currentUser = async (req: Request, res: Response) => {
  res.send(req.user);
};
