import "reflect-metadata";
import express, { Express } from "express";
import connection from "./database";
import routerInitializer from "./routes";
//import { errorHandler } from "./middlewares/error.middleware";

connection();
const app: Express = express();

app.use(express.json());

routerInitializer(app);

//app.use(errorHandler);

export default app;
