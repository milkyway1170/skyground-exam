import express from "express";
import * as dotenv from "dotenv";
import "reflect-metadata";
import { AppDataSource } from "./src/db/data-source";
import { routingBuilder } from "./src/routing";

dotenv.config();

const { PORT = 5000 } = process.env;

const app = express();
app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: false }));

routingBuilder(app);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
