import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const AuthenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("token");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid authorization header" });
  }

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Authorization token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
