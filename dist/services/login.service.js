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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const authenticateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const UserRepository = (0, typeorm_1.getCustomRepository)(userRepository_1.default);
    const user = yield UserRepository.findByEmail(email);
    if (user === undefined || !bcrypt_1.default.compareSync(password, user.password)) {
        return undefined;
    }
    const token = jsonwebtoken_1.default.sign({ id: user.uuid }, SECRET_KEY, {
        expiresIn: "1d",
    });
    return token;
});
exports.authenticateUser = authenticateUser;
