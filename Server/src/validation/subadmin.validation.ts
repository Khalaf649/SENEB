// validation/sub.adminValidator.ts
import { body } from "express-validator";
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export const donationValidation = [
  body("userId")

    .custom(async (userId) => {
        if(!userId) {
            throw new Error("User ID is required");
            }
      const donor = await prisma.donors.findUnique({
        where: { user_id: userId }
      });

      if (!donor) {
        throw new Error("Donor with the given userId does not exist");
      }

      return true;
    }),

  body("unitsDonated")
    .isInt({ min: 1 }).withMessage("Units donated must be a positive integer"),

  body("status")
    .isIn(["successful", "failed"]).withMessage("Status must be either 'successful' or 'failed'")
];
