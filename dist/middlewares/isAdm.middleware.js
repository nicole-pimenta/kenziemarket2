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
exports.isAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const typeorm_1 = require("typeorm");
const isAdmin = (req, res, next) => {
    var _a;
    const usersRepository = (0, typeorm_1.getCustomRepository)(userRepository_1.default);
    const { uuid } = req.params;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            const userUuid = decoded.id;
            const user = yield usersRepository.findOne(userUuid);
            if ((user === null || user === void 0 ? void 0 : user.isAdm) == false) {
                if (uuid !== decoded.id) {
                    res
                        .status(401)
                        .json({ message: "Not allowed to search this user" });
                }
                else {
                    const user = yield usersRepository.findOne(userUuid);
                    res.status(200).json({ user });
                }
            }
            else {
                const usernew = yield usersRepository.findOne(uuid);
                res.status(200).json({ usernew });
            }
        }));
    }
    catch (error) {
        return res.status(401).json({ message: "error" });
    }
};
exports.isAdmin = isAdmin;
