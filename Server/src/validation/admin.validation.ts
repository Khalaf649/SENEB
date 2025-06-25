// middleware/validateTokenPayload.ts
import { body } from 'express-validator';
import { PrismaClient } from '@prisma/client';

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
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        throw new Error('Email already in use');
      }
      return true;
    }),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  body('contact')
    .isString().withMessage('Contact must be a string')
    .notEmpty().withMessage('Contact is required'),

  body('center_id')
    .isInt({ min: 1 }).withMessage('center_id must be a positive integer'),
];
