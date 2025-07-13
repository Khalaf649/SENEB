// middleware/validateTokenPayload.ts
import { body } from 'express-validator';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export const validatebloodCenter = [
  body('name')
    .isString().withMessage('Name must be a string')
    .notEmpty().withMessage('Name is required'),

  body('address')
    .isString().withMessage('Address must be a string')
    .notEmpty().withMessage('Address is required'),

  body('contact')
    .isString().withMessage('Contact must be a string')
    .notEmpty().withMessage('Contact is required'),
];
// middleware/validateSubAdmin.ts

export const validateSubAdmin = [
  body('name')
    .isString().withMessage('Name must be a string')
    .notEmpty().withMessage('Name is required'),

  body('email')
    .isEmail().withMessage('Email must be valid')
    .custom(async (email) => {
      const existing = await prisma.users.findUnique({ where: { email } });
      if (existing) {
        throw new Error('Email already in use');
      }
      return true;
    }),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  body('confirm_password')
    .notEmpty().withMessage('Confirm password is required')
    .custom((confirm_password, { req }) => {
      if (confirm_password !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

  body('contact')
    .isString().withMessage('Contact must be a string')
    .notEmpty().withMessage('Contact is required'),

  body('center_id')
    .isInt({ min: 1 }).withMessage('center_id must be a positive integer')
    .custom(async (center_id) => {
      const existingSubAdmin = await prisma.subadmins.findFirst({
        where: {
          center_id: center_id,
        },
      });
      if (existingSubAdmin) {
        throw new Error('This center already has a sub-admin');
      }
      return true;
    }),
];
