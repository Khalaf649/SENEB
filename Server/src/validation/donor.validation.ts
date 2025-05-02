import { body } from "express-validator";
export const donorUpdateValidator = [
    body("full_name")
      .isString().withMessage("Full name must be a string")
      .isLength({ max: 100 }).withMessage("Full name can be at most 100 characters")
      .notEmpty().withMessage("Full name is required"),
  
    body("contact_phone")
      .isString().withMessage("Contact phone must be a string")
      .notEmpty().withMessage("Contact phone is required"),
  
    body("weight")
      .isFloat({ min: 0 }).withMessage("Weight must be a positive number")
      .notEmpty().withMessage("Weight is required"),
  
    body("address")
      .isString().withMessage("Address must be a string")
      .isLength({ max: 255 }).withMessage("Address can be at most 255 characters")
      .notEmpty().withMessage("Address is required"),
  
    body("last_donation_date")
      .optional()
      .isISO8601().toDate().withMessage("Last donation date must be a valid date"),
  
    body("blood_type")
      .matches(/^(A|B|AB|O)[+-]$/).withMessage("Blood type must be a valid type like A+, O-, etc.")
      .notEmpty().withMessage("Blood type is required"),
  
    body("medical_conditions")
      .optional()
      .isString().withMessage("Medical conditions must be a string"),
  
    body("medications")
      .optional()
      .isString().withMessage("Medications must be a string"),
  ];