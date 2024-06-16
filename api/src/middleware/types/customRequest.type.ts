import { Request } from "express";
import { JwtPayload } from "./jwtPayload.type";

export interface CustomRequest extends Request {
  user: JwtPayload;
}
