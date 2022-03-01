import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import Product from "./Product";
import User from "./User";

@Entity("carts")
export default class Cart {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  createdAt!: string;

  @Column({ default: 1 })
  quantity!: number;

  @ManyToOne(() => Product, (product) => product.cart)
  product!: Product;

  @ManyToOne((type) => User, (user) => user.purchases)
  user!: User;
}
