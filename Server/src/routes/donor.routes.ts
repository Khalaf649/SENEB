import { Router } from "express";
const router = Router();
import {getDonorProfile,updateDonorProfile,getAppointments,getDonationHistory,createAppointment} from "../controllers/donor.controller";
import authMiddleware from "../middlewares/auth.middleware.ts";
import roleMiddlware from "../middlewares/role.middleware";
import { upload } from '../config/multer';
import { uploadToCloudinary } from "../middlewares/uploadImage";
import validateRequest from "../middlewares/validateRequest.ts";
import { donorUpdateValidator } from "../validation/donor.validation";


router.use(authMiddleware); // Apply auth middleware to all routes in this router
router.use(roleMiddlware(["donor"])); // Apply role middleware to all routes in this router

router.get("/profile", getDonorProfile);
router.put("/profile",upload.single('donor_image'), donorUpdateValidator, validateRequest,  // Upload image and validate request
     updateDonorProfile);
router.get("/appointments", getAppointments);
router.post("/appointments", createAppointment);
router.get("/donations", getDonationHistory);





export default router;