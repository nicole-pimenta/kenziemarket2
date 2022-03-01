import { Router } from "express";
import {
  create,
  list,
  listById,
  currentUser,
} from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isAdmin } from "../middlewares/isAdm.middleware";
const router = Router();

export const userRouter = () => {
  router.post("", create);
  router.get("", list);
  router.get("/:uuid", isAuthenticated, isAdmin, listById);
  router.get("/currentUser", isAuthenticated, currentUser);

  return router;
};
