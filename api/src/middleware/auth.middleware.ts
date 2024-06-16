import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "./types/customRequest.type";
import { User } from "../user/user.entity";

export const AuthenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.cookie?.slice(9);

    if (!token) {
      return res.status(401).json({ error: "Authorization token not found" });
    }

    const { id, email, fullName } = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as User;

    (req as CustomRequest).user = {
      id,
      fullName,
      email,
    };

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid token" });
  }
};
