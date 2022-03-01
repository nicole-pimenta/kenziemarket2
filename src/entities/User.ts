import bcrypt from "bcrypt";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Cart from "./Cart";
import Product from "./Product";

@Entity("users") // Nome da tabela
export default class User {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @ManyToMany((type) => Product, (product) => product.uuid, {
    onDelete: "CASCADE",
    cascade: true,
    eager: true,
  })
  @JoinTable()
  cart!: Product[];

  @OneToMany((type) => Cart, (cart) => cart.user, {
    onDelete: "CASCADE",
    cascade: true,
    eager: true,
  })
  purchases!: Cart[];

  @Column({ nullable: true })
  recover!: string;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  constructor(email: string, password: string, name: string, isAdm: boolean) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.isAdm = isAdm;
  }

  outputUser() {
    let object = {
      uuid: this.uuid,
      name: this.name,
      email: this.email,
      isAdm: this.isAdm,
    };

    return object;
  }
}
