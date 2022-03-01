require("dotenv").config();

const PG_HOST = process.env.PG_HOST;
const PG_DB = process.env.PG_DB;
const PG_USER = process.env.PG_USER;
const PG_PASSWORD = process.env.PG_PASSWORD;
const DATABASE_URL = process.env.DATABASE_URL;

const developmentEnv = {
  type: "postgres",
  url: `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:5440/${PG_DB}`,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
  logging: true,
  synchronize: false,
};

const prodEnv = {
  type: "postgres",
  url: DATABASE_URL,
  entities: ["./dist/entities/**/*.js"],
  migrations: ["./dist/database/migrations/*.js"],
  cli: {
    migrationsDir: "./dist/database/migrations",
  },
  synchronize: false,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
};

let exportModule = undefined;
if (process.env.NODE_ENV === "production") {
  exportModule = prodEnv;
} else if (process.env.NODE_ENV === "test") {
  exportModule = testEnv;
} else {
  exportModule = developmentEnv;
}

module.exports = exportModule;
