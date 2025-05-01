import { Router } from "express";
import { login, donorRegister, staffRegister, adminRegister } from "../controllers/auth.controller.ts"; // Assuming you have controllers for each route
import { loginValidator, donorRegisterValidator, staffRegisterValidator, adminRegisterValidator } from "../validation/auth.validation"; // Assuming you have validation middleware
const router = Router();
import validateRequest from "../middlewares/validateRequest.ts.js";
import { upload } from '../config/multer';
import { uploadToCloudinary } from '../middlewares/uploadImage';



// **Login Route**
router.post("/login", loginValidator,validateRequest,login);

// **Donor Register Route**
router.post("/donor/register",upload.single('donor_image'),
donorRegisterValidator,
validateRequest,
uploadToCloudinary,
donorRegister);

// **Staff Register Route**
router.post("/staff/register", staffRegister);

// **Admin Register Route**
router.post("/admin/register", adminRegister);

export default router;
