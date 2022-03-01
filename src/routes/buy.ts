import { Router } from "express";
//import { create, list, listById } from "../controllers/buy.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isAdmin } from "../middlewares/isAdm.middleware";

const router = Router();

export const buyRouter = () => {
  router.post("", isAuthenticated /*create*/);
  router.get("", isAuthenticated /*list*/);
  router.get("/:id", isAuthenticated, isAdmin /*listById*/);

  return router;
};
