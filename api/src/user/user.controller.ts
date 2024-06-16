import express, { Request, Response } from "express";
import { AuthenticateMiddleware } from "../middleware/auth.middleware";
import { User } from "./user.entity";
import { plainToClass } from "class-transformer";
import { UserDTO } from "./user.model";
import { CustomRequest } from "../middleware/types/customRequest.type";

const router = express.Router();

router.get(
  "/",
  AuthenticateMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const users = await User.find();

      const userList = users.map((user) =>
        plainToClass(UserDTO, user, { excludeExtraneousValues: true })
      );

      res.status(200).send(userList);
    } catch (error) {
      res.status(500).json({ error: "Fetching users failed" });
    }
  }
);

router.get(
  "/me",
  AuthenticateMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const user = await User.findOneBy({ id: req.user.id });

      if (user == null) {
        return res.status(401).json({ error: "User wasn't found" });
      }

      const userDto = plainToClass(UserDTO, user, {
        excludeExtraneousValues: true,
      });

      res.status(200).send(userDto);
    } catch (err) {}
  }
);

export const UserController = router;
