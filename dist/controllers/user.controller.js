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
exports.currentUser = exports.listById = exports.list = exports.create = void 0;
const user_service_1 = require("../services/user.service");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.createUser)(req.body);
        res.status(201).send(user.outputUser());
    }
    catch (error) {
        next(error);
    }
});
exports.create = create;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageQuery = req.query.page ? parseInt(req.query.page) : 1;
    const users = yield (0, user_service_1.listUser)(pageQuery);
    res.send(users);
});
exports.list = list;
const listById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uuid } = req.params;
    if (uuid == undefined) {
        return res.status(401).send({ message: "Missing token autorization" });
    }
    const listedUser = yield (0, user_service_1.listByProfile)(uuid, req.body);
    res.send(listedUser);
});
exports.listById = listById;
const currentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(req.user);
});
exports.currentUser = currentUser;
