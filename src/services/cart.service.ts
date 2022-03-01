import { Product, User, Cart } from "../entities";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

interface UserBody {
  name: string;
  price: number;
}

export const createCart = async (body: UserBody) => {
  const { name, price } = body;

  try {
    const cartRepository = getRepository(Cart);
    // const userRepository = getRepository(User);

    // const user = await userRepository.findOne(req.user?.id);

    const cart = cartRepository.create(new Product(name, price));

    await cartRepository.save(cart);

    return cart;
  } catch (error) {
    throw new AppError((error as any).message, 400);
  }
};

export const listCart = async (page = 1) => {
  const cartRepository = getRepository(Cart);

  return cartRepository;
};

export const listByProfile = async (userUuid: string, data: any) => {
  const productRepository = getRepository(Product);

  const user = await productRepository.findOne(userUuid);

  return user;
};
