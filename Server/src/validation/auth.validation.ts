import { body } from "express-validator";
import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();
export const loginValidator = [
    body("email")
      .isEmail()
      .withMessage("A valid email is required."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters."),
  ];
  

  export const donorRegisterValidator = [
    body("full_name")
      .isString().withMessage("Full name must be a string")
      .isLength({ max: 100 }).withMessage("Full name can be at most 100 characters")
      .notEmpty().withMessage("Full name is required"),
  
    body("email")
      .isEmail().withMessage("Email must be a valid email address")
      .notEmpty().withMessage("Email is required")
      .custom(async (email) => {
        const existingUser = await prisma.users.findUnique({ where: { email } });
        if (existingUser) {
          console.log("Email is already registered")
          throw new Error("Email is already registered");
          
        }
        return true;
      }),
  
    body("password")
      .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  
    body("confirm_password")
      .isLength({ min: 6 }).withMessage("Confirm password must be at least 6 characters")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Confirm password does not match password");
        }
        return true;
      }),
  
    body("phone_number")
      .isString().withMessage("Phone number must be a string")
      .notEmpty().withMessage("Phone number is required"),
  
    body("national_id")
      .isString().withMessage("National ID must be a string")
      .isLength({ max: 20 }).withMessage("National ID can be at most 20 characters")
      .notEmpty().withMessage("National ID is required")
      .custom(async (national_id) => {
        const existingDonor = await prisma.donors.findUnique({ where: { national_id } });
        if (existingDonor) {
          throw new Error("National ID is already registered");
        }
        return true;
      }),
  
    body("birth_date")
      .isISO8601().toDate().withMessage("Birth date must be a valid date")
      .notEmpty().withMessage("Birth date is required"),
  
    body("gender")
      .isIn(["male", "female"]).withMessage("Gender must be Male or Female")
      .notEmpty().withMessage("Gender is required"),
  
    body("address")
      .isString().withMessage("Address must be a string")
      .isLength({ max: 255 }).withMessage("Address can be at most 255 characters")
      .notEmpty().withMessage("Address is required"),
  
    body("blood_type")
      .matches(/^(A|B|AB|O)[+-]$/).withMessage("Blood type must be a valid type like A+, O-, etc.")
      .notEmpty().withMessage("Blood type is required"),
  
    body("last_donation_date")
      .optional()
      .isISO8601().toDate().withMessage("Last donation date must be a valid date"),
  
    body("medications")
      .optional()
      .isString().withMessage("Medications must be a string"),
  
    body("medical_conditions")
      .optional()
      .isString().withMessage("Medical conditions must be a string"),
  
    body("weight")
      .isFloat({ min: 0 }).withMessage("Weight must be a positive number")
      .notEmpty().withMessage("Weight is required"),
  
  ];


  export const staffRegisterValidator = [
  ]


  export const adminRegisterValidator = [
  ]