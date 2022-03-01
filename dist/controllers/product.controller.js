"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listById = exports.list = exports.create = void 0;
const entities_1 = require("../entities");
const typeorm_1 = require("typeorm");
const product_service_1 = require("../services/product.service");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const productRepository = (0, typeorm_1.getRepository)(entities_1.Product);
    const userRepository = (0, typeorm_1.getRepository)(entities_1.User);
    const user = yield userRepository.findOne((_a = req.user) === null || _a === void 0 ? void 0 : _a.uuid);
    const product = yield (0, product_service_1.createProduct)(req.body);
    res.status(201).send(product);
});
exports.create = create;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, product_service_1.listProduct)();
    res.send(users);
});
exports.list = list;
const listById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uuid } = req.params;
    if (uuid == undefined) {
        return res.status(401).send({ message: "Missing token autorization" });
    }
    const listedProduct = yield (0, product_service_1.listByProfile)(uuid, req.body);
    res.send(listedProduct);
});
exports.listById = listById;
