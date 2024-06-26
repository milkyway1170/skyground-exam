import express, { Request, Response } from "express";
import "dotenv/config";
import { User } from "../user/user.entity";
import { checkPassword, hashedPassword } from "../helpers/password";
import { generateAndAddToken } from "../helpers/generateAndAddToken";
import { WEEK_IN_SECONDS } from "../constants";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    const existUser = await User.findOneBy({ email });

    if (existUser !== null) {
      return res
        .status(401)
        .json({ success: false, error: `User with email ${email} is exist` });
    }

    const passwordHash = await hashedPassword(password);

    const user = new User();
    user.fullName = fullName;
    user.email = email;
    user.passwordHash = passwordHash;

    const savedUser = await User.save(user);

    await generateAndAddToken(res, savedUser);

    res.status(200).send({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Registration failed" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOneBy({ email });

    if (user == null) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const passwordMatch = await checkPassword(password, user.passwordHash);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    await generateAndAddToken(res, user);

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

router.delete("/logout", async (_: Request, res: Response) => {
  try {
    res.clearCookie("jwtToken");
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Logout failed" });
  }
});

export const AuthController = router;
