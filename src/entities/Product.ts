import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  CreateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import Cart from "./Cart";

@Entity("products")
export default class Product {
  @PrimaryColumn()
  uuid!: string;

  @Column()
  productName!: string;

  @Column()
  price!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany((type) => Cart, (cart) => cart.product, { cascade: true })
  cart!: Cart[];

  @Column({ default: 0 })
  available!: number;

  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }
}
