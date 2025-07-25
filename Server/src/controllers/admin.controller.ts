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
export const getFilteredBloodCenters = async (req: Request, res: Response) => {
  try {
    const filter = req.query.subadmin as string;

    let whereCondition = undefined;

    if (filter === "with") {
      whereCondition = { subadmins: { some: {} } };
    } else if (filter === "without") {
      whereCondition = { subadmins: { none: {} } };
    }
    // else: no filtering (all centers)

    const centers = await prisma.bloodcenters.findMany({
      where: whereCondition,
    });

    res.status(200).json(centers);
  } catch (error) {
    console.error("Error fetching blood centers:", error);
    res.status(500).json({ message: "Server error." });
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
    const { name, email, password, contact, center_id} = req.body as subAdmin;

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
export const getAllSubAdmins = async (req: Request, res: Response) => {
  try {
    const subAdmins = await prisma.subadmins.findMany({
      include: {
        users: {
          select: {
            name: true,
            email: true,
            contact_phone: true,
          },
        },
        bloodcenters: {
          select: {
            center_name: true,
          },
        },
      },
    });

    const formatted = subAdmins.map((s) => ({
      name: s.users.name,
      email: s.users.email,
      contact: s.users.contact_phone,
      center_name: s.bloodcenters.center_name,
      id:s.user_id
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Error fetching sub-admins:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const deleteSubAdmin = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
       res.status(400).json({ message: "Invalid user ID." });
       return;
    }

    // Check if user exists
    const user = await prisma.users.findUnique({
      where: { user_id: id },
    });

    if (!user) {
       res.status(404).json({ message: "User not found." });
       return;
    }

    // Delete user (cascade should delete subadmin row if set in schema)
    await prisma.users.delete({
      where: { user_id: id },
    });

     res.status(200).json({ message: "Sub-admin deleted successfully." });
  } catch (error) {
    console.error("Error deleting sub-admin:", error);
     res.status(500).json({ message: "Server error." });
  }
};
export const getAdminData= async (req:AuthRequest,res:Response)=>{
  const userId = req.user?.id;

  if (!userId) {
     res.status(401).json({ message: "Unauthorized" });
     return;
  }

  try {
    const adminData=await prisma.users.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        name: true,
        email: true,
        contact_phone: true,
        role: true,
      },
    })

    if (!adminData) {
       res.status(404).json({ message: "Admin not found" });
       return
    }

    res.status(200).json(adminData);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getDonationHistory = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
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
    `);

    res.status(200).json({data: donationData });
  } catch (error) {
    console.error('Error fetching donation history:', error);
    next(error);
  }
};

