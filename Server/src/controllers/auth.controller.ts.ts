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


 export const login= async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as LoginRequest;
    try {
        const user = await prisma.users.findUnique({
            where: { email },
        });

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
     
          console.log(token);
        res.json({token});
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
    console.log(req.body)
    const donor_image = req.body.donor_image; // from Cloudinary middleware

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Convert birth_date and last_donation_date to ISO strings
    const parsedBirthDate = new Date(birth_date);
    const parsedDonationDate = last_donation_date ? new Date(last_donation_date) : null;

    // First, create the user
    const user = await prisma.users.create({
      data: {
       // Generate a unique user ID
        username: full_name,
        email,
        password: hashedPassword,
        contact_phone: phone_number,
        role: "donor",
      },
    });

    // Then create the donor record with the user's id
    const donor = await prisma.donors.create({
      data: {
        user_id: user.user_id,
        full_name,
        national_id,
        birth_date: parsedBirthDate,
        gender,
        address,
        blood_type,
        last_donation_date: parsedDonationDate,
        medications,
        medical_conditions,
        weight: Number(weight),
        donor_image,
      },
    });

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
