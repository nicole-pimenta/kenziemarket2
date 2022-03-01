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
exports.listByProfile = exports.listUser = exports.createUser = void 0;
const entities_1 = require("../entities");
const typeorm_1 = require("typeorm");
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const createUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, isAdm } = body;
    try {
        const userRepository = (0, typeorm_1.getRepository)(entities_1.User);
        const user = userRepository.create(new entities_1.User(email, password, name, isAdm));
        yield userRepository.save(user);
        return user;
    }
    catch (error) {
        throw new AppError_1.default(error.message, 400);
    }
});
exports.createUser = createUser;
const listUser = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, typeorm_1.getCustomRepository)(userRepository_1.default);
    const users = yield userRepository.findPaginated(page);
    return users;
});
exports.listUser = listUser;
const listByProfile = (userUuid, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, typeorm_1.getCustomRepository)(userRepository_1.default);
    const user = yield userRepository.findOne(userUuid);
    return user;
});
exports.listByProfile = listByProfile;
