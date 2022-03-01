"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const authentication_middleware_1 = require("../middlewares/authentication.middleware");
const isAdm_middleware_1 = require("../middlewares/isAdm.middleware");
const router = (0, express_1.Router)();
const productRouter = () => {
    router.post("", authentication_middleware_1.isAuthenticated, product_controller_1.create);
    router.get("", authentication_middleware_1.isAuthenticated, product_controller_1.list);
    router.get("/:id", authentication_middleware_1.isAuthenticated, isAdm_middleware_1.isAdmin, product_controller_1.listById);
    return router;
};
exports.productRouter = productRouter;
