"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const routes_1 = __importDefault(require("./routes"));
//import { errorHandler } from "./middlewares/error.middleware";
(0, database_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
//app.use(errorHandler);
exports.default = app;
