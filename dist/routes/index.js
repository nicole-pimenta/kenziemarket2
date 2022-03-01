"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./login");
const user_1 = require("./user");
const product_1 = require("./product");
const routerInitializer = (app) => {
    app.use("/user", (0, user_1.userRouter)());
    app.use("/login", (0, login_1.loginRouter)());
    app.use("/product", (0, product_1.productRouter)());
};
exports.default = routerInitializer;
