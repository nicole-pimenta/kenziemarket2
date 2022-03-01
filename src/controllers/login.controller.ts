import { Request, Response } from "express";
import { authenticateUser } from "../services/login.service";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await authenticateUser(email, password);

  if (token == undefined) {
    return res.status(401).send({ message: "Wrong email/password" });
  }

  res.status(200).send({ token });
};
