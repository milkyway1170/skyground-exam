import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import path = require("path");

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "../../src/**/*.entity{.ts,.js}")],
  migrations: [path.join(__dirname, "../../src/db/migrations/*{.ts,.js}")],
  // migrationsTableName: "migrations",
});
