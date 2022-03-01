import { Express } from "express";
import { loginRouter } from "./login";
import { userRouter } from "./user";
import { productRouter } from "./product";
import { cartRouter } from "./cart";
import { buyRouter } from "./buy";

const routerInitializer = (app: Express) => {
  app.use("/user", userRouter());
  app.use("/login", loginRouter());
  app.use("/product", productRouter());
  app.use("/cart", cartRouter());
  app.use("/buy", buyRouter());
};

export default routerInitializer;
