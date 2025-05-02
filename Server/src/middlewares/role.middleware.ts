import { Response, NextFunction } from "express";
import AuthRequest from "../Interfaces/AuthRequest";


export default (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
       res.status(401).json({ message: "Unauthorized: No user role found" });
        return;
    }

    if (!roles.includes(req.user.role)) {
       res.status(403).json({ message: `Forbidden: Requires role(s): ${roles.join(', ')}` });
        return;
    }

    next();
  };
};
