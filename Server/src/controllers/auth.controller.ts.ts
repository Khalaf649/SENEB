import  { Request,Response,NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma= new PrismaClient();
const saltRounds = 10;
import tokenPayload from "../Interfaces/TokenPayload";
import { Role } from "../constants/roles";
import bcrpt from "bcrypt";
import {LoginRequest,RegisterDonorRequest} from "../Interfaces/auth.interface";
import {User} from "../Interfaces/User";


export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as LoginRequest;
  try {
    const result: User[] = await prisma.$queryRaw<User[]>`SELECT * FROM users WHERE email = ${email}`;

    const user: User = result[0];
    
 // Assuming the result is an array of users and we need the first one

      if (!user) {
          res.status(401).json({ message: "Invalid email or password" });
          return;
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          res.status(401).json({ message: "Invalid email or password" });
          return;
      }

      const payload: tokenPayload = {
          id: user.user_id,
          role: user.role as Role
      };

      const token = jwt.sign(
          payload,
          process.env.JWT_SECRET as string,
          { expiresIn: "7d" }
      );

      res.json({ token });
  } catch (error) {
      next(error);
  }
}



export const donorRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      full_name,
      email,
      password,
      phone_number,
      national_id,
      birth_date,
      gender,
      address,
      blood_type,
      last_donation_date,
      medications,
      medical_conditions,
      weight,
    } = req.body as RegisterDonorRequest;

    console.log(req.body);
    const donor_image = req.body.donor_image; // from Cloudinary middleware

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const parsedBirthDate = new Date(birth_date);
    const parsedDonationDate = last_donation_date ? new Date(last_donation_date) : null;

    // Insert user and get inserted user_id
    const userInsertResult = await prisma.$queryRaw<
      { user_id: number }[]
    >`INSERT INTO users (email, password, contact_phone, role)
       VALUES (${email}, ${hashedPassword}, ${phone_number}, 'donor')
       RETURNING user_id`;

    const user_id = userInsertResult[0].user_id;

    // Insert donor with that user_id
    await prisma.$executeRaw`INSERT INTO donors (
      user_id,
      full_name,
      national_id,
      birth_date,
      gender,
      address,
      blood_type,
      last_donation_date,
      medications,
      medical_conditions,
      weight,
      donor_image
    )
    VALUES (
      ${user_id},
      ${full_name},
      ${national_id},
      ${parsedBirthDate},
      ${gender},
      ${address},
      ${blood_type},
      ${parsedDonationDate},
      ${medications},
      ${medical_conditions},
      ${Number(weight)},
      ${donor_image}
    )`;

    res.status(201).json({ message: "Donor registered successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};


 export const staffRegister= async (req: Request, res: Response, next: NextFunction) => {
 }

export const adminRegister= async (req: Request, res: Response, next: NextFunction) => {
}
