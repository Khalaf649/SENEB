import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrpt from 'bcrypt';
import { Request,Response,NextFunction } from 'express';
import { errorHandler } from './middlewares/error.middleware';
import authRouter from "./routes/auth.routes";
import  donorRouter from "./routes/donor.routes";
import  adminRouter from "./routes/admin.routes";
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());



app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/donor', donorRouter);
app.use('/admin', adminRouter);

app.use(errorHandler);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
