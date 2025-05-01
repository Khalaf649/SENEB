import { Request } from "express";
export default interface AuthRequest extends Request {
  user?: { id: number; role: "donor" | "admin"| "hospital_staff"|"sub_admin" };
}


