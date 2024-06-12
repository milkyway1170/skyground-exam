import { Express } from "express";
import { UserController } from "../user/user.controller";
import { AuthController } from "../auth/auth.controller";

export const routingBuilder = (app: Express) => {
  app.use("/users", UserController);
  app.use("/auth", AuthController);

  app.get("/healthcheck", (req, res) => {
    res.status(200).send({
      status: "ok",
    });
  });
};
