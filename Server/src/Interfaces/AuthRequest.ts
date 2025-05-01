import { Request } from "express";
import { Role } from "../constants/roles";
export default interface AuthRequest extends Request {
  user?: { id: number; role: Role };
}


