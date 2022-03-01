import { Product, User } from "../entities";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

interface UserBody {
  name: string;
  price: number;
}

export const createProduct = async (body: UserBody) => {
  const { name, price } = body;

  try {
    const productRepository = getRepository(Product);
    // const userRepository = getRepository(User);

    // const user = await userRepository.findOne(req.user?.id);

    const product = productRepository.create(new Product(name, price));

    await productRepository.save(product);

    return product;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const listProduct = async (page = 1) => {
  const productRepository = getRepository(Product);

  return productRepository;
};

export const listByProfile = async (userUuid: string, data: any) => {
  const productRepository = getRepository(Product);

  const user = await productRepository.findOne(userUuid);

  return user;
};
