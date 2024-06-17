import express from "express";
import * as dotenv from "dotenv";
import "reflect-metadata";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AppDataSource } from "./src/db/dataSource";
import { routingBuilder } from "./src/routing";

dotenv.config();

const { PORT = 5000, URL_PATH_TO_FRONT } = process.env;

const app = express();
app.use(express.json({ strict: true }));
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: URL_PATH_TO_FRONT,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

routingBuilder(app);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
