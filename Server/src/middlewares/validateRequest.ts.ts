import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
   console.log(req.body.email,req.body.password)
  if (!errors.isEmpty()) {
    console.log(errors.array()[0].msg);
    res.status(400).json({ message: errors.array()[0].msg });
    return;
  }
  next();
};

export default validateRequest;
