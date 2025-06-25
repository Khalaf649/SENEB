import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
const saltRounds = 10;
import tokenPayload from "../Interfaces/TokenPayload";
import { Role } from "../constants/roles";
import bcrpt from "bcrypt";
import { LoginRequest, RegisterDonorRequest } from "../Interfaces/auth.interface";
import { Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';



export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, role } = req.body as LoginRequest;
  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });


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
    if (role === "admin") {
      if (user.role !== "admin" && user.role !== "sub_admin") {
        res.status(403).json({ message: "Inavlid email or password" });
        return
      }
    } else {
      if (user.role !== role) {
        res.status(403).json({ message: "Inavlid email or password." });
        return
      }
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

    res.json({ token, role: user.role });
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

    const donor_image = req.body.donor_image; // from Cloudinary middleware

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const parsedBirthDate = new Date(birth_date);
    const parsedDonationDate = last_donation_date ? new Date(last_donation_date) : null;

    // Insert user and get inserted user_id
    const user = await prisma.users.create({
      data: {
        name:full_name,
       email: email,
        password: hashedPassword,
        contact_phone: phone_number,
        role: 'donor'
      },
      select: {
        user_id: true
      }
    });

    const user_id = user.user_id;

    await prisma.donors.create({
      data: {
        user_id: user_id,
        national_id: national_id,
        birth_date: parsedBirthDate,
        gender: gender,
        address: address,
        blood_type: blood_type,
        last_donation_date: parsedDonationDate,
        medications: medications || null,
        medical_conditions: medical_conditions || null,
         weight: new Decimal(weight),
        donor_image: donor_image
      }
    });


    res.status(201).json({ message: "Donor registered successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};


export const staffRegister = async (req: Request, res: Response, next: NextFunction) => {
}

export const adminRegister = async (req: Request, res: Response, next: NextFunction) => {
}
