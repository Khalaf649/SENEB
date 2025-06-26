import { Request,Response,NextFunction } from "express";
import AuthRequest from "../Interfaces/AuthRequest";
import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();
import { DonorUpdateRequest } from "../Interfaces/DonorUpdate";

export const getDonorProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.user?.id;
    if(!userId) {
         res.status(400).json({ message: "User ID not found" });
        return;
    }
    try{
        const donor=await prisma.donors.findUnique({
            where:{
                user_id:userId
            }
        })
        if(!donor) {
            res.status(404).json({ message: "Donor not found" });
            return;
        }
        const user=await prisma.users.findUnique({
            where:{
                user_id:userId
            }
        })
        if(!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
       const donorProfile={
            id:user.user_id,
            full_name:user.name,
            email:user.email,
            contact_phone:user.contact_phone,
            address:donor.address,
            birth_date:donor.birth_date,
            blood_type:donor.blood_type,
            gender:donor.gender,
            weight:donor.weight,
            national_id:donor.national_id,
            last_donation_date:donor.last_donation_date,
            medications:donor.medications,
            medical_conditions:donor.medical_conditions,
            donor_image:donor.donor_image,
       }
         res.status(200).json(donorProfile);

    }
    catch(err) {
        next(err);
    }




}

export const updateDonorProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.user?.id;
  
    if (!userId) {
       res.status(400).json({ message: "User ID not found" });
        return;
    }
    try {
      const { full_name, contact_phone, weight, address, last_donation_date, blood_type, medical_conditions, medications } = req.body as DonorUpdateRequest;
      const donor_image = req.body.donor_image; // from Cloudinary middleware
      const parsedDonationDate = last_donation_date ? new Date(last_donation_date) : null;
      // Update the donor's profile in the database
      const updatedDonor = await prisma.donors.update({
        where: {
          user_id: userId,  // Assuming user_id is the foreign key linking donors with users
        },
        data: {
          weight,
          address,
          last_donation_date,
          blood_type,
          medical_conditions,
          medications,
          donor_image,
        },
      });
      const  updatedUser = await prisma.users.update({
        where: {
          user_id: userId,
        },
        data: {
          name:full_name,
          contact_phone,
        },
      });

       res.status(200).json({
        message: "Donor profile updated successfully",
      });
    } catch (err) {
      next(err); // Pass the error to the error-handling middleware
    }
  };
export const  getAppointments=(req: AuthRequest, res: Response, next: NextFunction) => {
}

export  const createAppointment=(req: AuthRequest, res: Response, next: NextFunction) => {
}
export const getDonationHistory=(req: AuthRequest, res: Response, next: NextFunction) => {
}