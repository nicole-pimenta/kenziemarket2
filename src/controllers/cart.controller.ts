import { NextFunction, Request, Response } from "express";
import { Product, User } from "../entities";
import { getRepository } from "typeorm";
import { createCart, listCart, listByProfile } from "../services/cart.service";
import AppError from "../errors/AppError";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productRepository = getRepository(Product);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(req.user?.uuid);

    if (!user) {
      throw new AppError("User undefined", 400);
    } else {
      const product = productRepository.create({
        // createdBy: user,
        price: 0,
      });

      await productRepository.save(product);
      res.status(201).send(product);
    }
  } catch (error) {
    next(error);
  }
};

export const list = async (req: Request, res: Response) => {
  const productRepository = getRepository(Product);
  const userRepository = getRepository(User);

  const user = await userRepository.findOne(req.user?.uuid);

  const products = await productRepository.find({
    //  createdBy: user,
  });
  res.status(200).send(products);
};

export const listById = async (req: Request, res: Response) => {
  const { uuid } = req.params;

  if (uuid == undefined) {
    return res.status(401).send({ message: "Missing token autorization" });
  }

  const listedProduct = await listByProfile(uuid, req.body);

  res.send(listedProduct);
};
