"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const authentication_middleware_1 = require("../middlewares/authentication.middleware");
const isAdm_middleware_1 = require("../middlewares/isAdm.middleware");
const router = (0, express_1.Router)();
const userRouter = () => {
    router.post("", user_controller_1.create);
    router.get("", user_controller_1.list);
    router.get("/:uuid", authentication_middleware_1.isAuthenticated, isAdm_middleware_1.isAdmin, user_controller_1.listById);
    router.get("/currentUser", authentication_middleware_1.isAuthenticated, user_controller_1.currentUser);
    return router;
};
exports.userRouter = userRouter;
