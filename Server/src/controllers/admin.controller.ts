import { Request, Response, NextFunction } from "express";
import AuthRequest from "../Interfaces/AuthRequest";
import { PrismaClient } from "../../generated/prisma";
import bloodCenter from "../Interfaces/Bloodcenter";
import subAdmin from "../Interfaces/Subadmin";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();



export const createBloodCenter = async (req: Request, res: Response) => {
    try {
        const { name, contact, address } = req.body as bloodCenter;

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
export const createSubadmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password, contact, center_id } = req.body as subAdmin ;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        contact_phone:contact,
        role: 'sub_admin',
      },
    });
    
    const sub_admin=await prisma.subadmins.create({
        data:{
            user_id:user.user_id,
            center_id

        }
    })

    res.status(201).json({
      message: 'Subadmin created successfully'});

  } catch (err) {
    console.error('Error creating subadmin:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};