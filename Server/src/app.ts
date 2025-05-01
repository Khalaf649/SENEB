import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrpt from 'bcrypt';
import { Request,Response,NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
