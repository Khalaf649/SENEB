import { Request, Response, NextFunction } from "express";
import AuthRequest from "../Interfaces/AuthRequest";
import { PrismaClient } from "../../generated/prisma";
import BloodCenter from "../Interfaces/Bloodcenter";
import subAdmin from "../Interfaces/Subadmin";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();



export const createBloodCenter = async (req: Request, res: Response) => {
  try {
    const { name, contact, address } = req.body as BloodCenter;

    const center = await prisma.bloodcenters.create({
      data: {
        center_name: name,
        contact_info: contact,
        address: address
      },
    });

    res.status(201).json({ message: 'Blood center created successfully.', data: center });
  } catch (err) {
    console.error('Error creating blood center:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
export const getAllBloodCenters = async (req: Request, res: Response) => {
  try {
    const centers = await prisma.bloodcenters.findMany();

    res.status(200).json(centers);
  } catch (error) {
    console.error("Error fetching blood centers:", error);
    res.status(500).json({ message: "Failed to fetch blood centers." });
  }
};
export const getBloodCenter = async (req: Request, res: Response) => {
  try {
    const centerId = parseInt(req.params.id);

    if (isNaN(centerId)) {
      res.status(400).json({ message: "Invalid center ID." });
      return;
    }

    const center = await prisma.bloodcenters.findUnique({
      where: { center_id: centerId },
    });

    if (!center) {
      res.status(404).json({ message: "Center not found." });
      return;
    }

    res.status(200).json(center);
  } catch (error) {
    console.error("Error fetching center:", error);
    res.status(500).json({ message: "Server error." });
  }
};

export const deleteBloodCenter = async (req: Request, res: Response) => {
  try {
    const centerId = parseInt(req.params.id);

    if (isNaN(centerId)) {
       res.status(400).json({ message: "Invalid center ID." });
       return;
    }

    const center = await prisma.bloodcenters.findUnique({
      where: { center_id: centerId },
    });

    if (!center) {
       res.status(404).json({ message: "Center not found." });
       return;
    }

    await prisma.bloodcenters.delete({
      where: { center_id: centerId },
    });

     res.status(200).json({ message: "Center deleted successfully." });
  } catch (error) {
    console.error("Error deleting center:", error);
     res.status(500).json({ message: "Server error." });
  }
};



export const updateBloodCenter = async (req: Request, res: Response) => {
  try {
    const centerId = parseInt(req.params.id);
    const { name, address, contact } = req.body as BloodCenter;

    if (isNaN(centerId)) {
       res.status(400).json({ message: "Invalid center ID." });
       return;
    }

    const existingCenter = await prisma.bloodcenters.findUnique({
      where: { center_id: centerId },
    });

    if (!existingCenter) {
       res.status(404).json({ message: "Center not found." });
       return;
    }

    const updatedCenter = await prisma.bloodcenters.update({
      where: { center_id: centerId },
      data: {
        center_name:name,
        address,
        contact_info:contact,
      },
    });

     res.status(200).json(updatedCenter);
  } catch (error) {
    console.error("Error updating center:", error);
     res.status(500).json({ message: "Server error." });
     return;
  }
};


export const createSubadmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password, contact, center_id } = req.body as subAdmin;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        contact_phone: contact,
        role: 'sub_admin',
      },
    });

    const sub_admin = await prisma.subadmins.create({
      data: {
        user_id: user.user_id,
        center_id

      }
    })

    res.status(201).json({
      message: 'Subadmin created successfully'
    });

  } catch (err) {
    console.error('Error creating subadmin:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};