import { Response } from "express";
import jwt from "jsonwebtoken";
import { WEEK_IN_SECONDS } from "../constants";
import { User } from "../user/user.entity";

export const generateAndAddToken = async (res: Response, user: User) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "7days",
  });

  res.cookie("token", token, {
    maxAge: WEEK_IN_SECONDS,
    httpOnly: true,
    secure: true,
  });

  return res;
};
