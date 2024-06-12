import express, { Request, Response } from "express";
import { AuthenticateMiddleware } from "../middleware/auth.middleware";
import { User } from "./user.entity";

const router = express.Router();

router.get("/", AuthenticateMiddleware, async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.status(200).send({ users });
  } catch (error) {
    res.status(500).json({ error: "Fetching users failed" });
  }
});

export const UserController = router;
