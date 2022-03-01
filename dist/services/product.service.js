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
exports.listByProfile = exports.listProduct = exports.createProduct = void 0;
const entities_1 = require("../entities");
const typeorm_1 = require("typeorm");
const AppError_1 = __importDefault(require("../errors/AppError"));
const createProduct = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price } = body;
    try {
        const productRepository = (0, typeorm_1.getRepository)(entities_1.Product);
        // const userRepository = getRepository(User);
        // const user = await userRepository.findOne(req.user?.id);
        const product = productRepository.create(new entities_1.Product(name, price));
        yield productRepository.save(product);
        return product;
    }
    catch (error) {
        throw new AppError_1.default(error.message, 400);
    }
});
exports.createProduct = createProduct;
const listProduct = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(entities_1.Product);
    return productRepository;
});
exports.listProduct = listProduct;
const listByProfile = (userUuid, data) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(entities_1.Product);
    const user = yield productRepository.findOne(userUuid);
    return user;
});
exports.listByProfile = listByProfile;
