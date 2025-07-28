import { Request, Response, NextFunction } from "express";
import AuthRequest from "../Interfaces/AuthRequest";
import { PrismaClient } from "../../generated/prisma";
import { donation } from "../Interfaces/donation";
import dayjs from 'dayjs';

const prisma = new PrismaClient();



export const getSubAdminProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.user?.id;

    try {
        const subadmin = await prisma.users.findUnique({
            where: {
                user_id: userId
            },
            select: {
                name: true,
                email: true,
                contact_phone: true,
            }
        });
        if (!subadmin) {
            res.status(404).json({ message: "Sub-admin not found" });
            return;
        }
        res.status(200).json({ subadmin });

    }
    catch {
        res.status(500).json({ message: "Server error" });

    }
}


export const getCenterData = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const centerId = req.user?.centerId;
    try {
        const center = await prisma.bloodcenters.findUnique({
            where: {
                center_id: centerId
            },
            select: {
                center_name: true,
                address: true,
                contact_info: true,
            }
        });
        if (!center) {
            res.status(404).json({ message: "Center not found" });
            return;
        }
        res.status(200).json({ center });

    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }


}


export const getAppointments = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const centerId = req.user?.centerId;
    try {
    
        const appointments = await prisma.appointments.findMany({
            where: { center_id: centerId },
            select: {
                appointment_id: true,
                appointment_date: true,
                status: true,
                donors: {
                    select: {
                        users: {
                            select: {
                                name: true,
                                email: true,
                            }
                        }
                    }
                }
            }
        });


        res.status(200).json({ appointments });
    }
    catch (error) {
        console.error(error);
         res.status(500).json({ message: "Server error" });
    }
};

export const getDonationHistory = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const centerId = req.user?.centerId;
        const donationData = await prisma.$queryRawUnsafe(`
      SELECT 
        U.name as User, 
        U.email as Email, 
        C.center_name as Center, 
        DH.donation_date as Date, 
        DH.units_donated as Amount, 
        DH.Status as Status
      FROM donationhistory DH
      JOIN donors D ON DH.donor_id = D.donor_id
      JOIN Users U ON D.user_id = U.user_id
      JOIN bloodcenters C ON DH.center_id = C.center_id
      WHERE C.center_id = ${centerId}
    `);

        res.status(200).json({ data: donationData });
    } catch (error) {
        console.error('Error fetching donation history:', error);
        next(error);
    }


}
export const addDonationHistory = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const donationData: donation = req.body;
    const CenterId = req.user?.centerId;


    try {
        const donor = await prisma.donors.findUnique({
            where: { user_id: donationData.userId }
        });
        if (!donor) {
            res.status(404).json({ message: "Donor not found" });
            return;
        }
        const newDonation = await prisma.donationhistory.create({
            data: {
              donor_id: donor.donor_id,
              units_donated: donationData.unitsDonated,
              status: donationData.status,
              center_id: CenterId!,
              donation_date: new Date()
            }
        });
        res.status(201).json({ message: "Donation history added", data: newDonation });
    } catch (error) {
        console.error('Error adding donation history:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}