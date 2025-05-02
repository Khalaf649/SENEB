import { Router } from "express";
const router = Router();
import {getDonorProfile,updateDonorProfile,getAppointments,getDonationHistory,createAppointment} from "../controllers/donor.controller";
import authMiddleware from "../middlewares/auth.middleware.ts";
import roleMiddlware from "../middlewares/role.middleware";


router.use(authMiddleware); // Apply auth middleware to all routes in this router
router.use(roleMiddlware(["donor"])); // Apply role middleware to all routes in this router

router.get("/profile", getDonorProfile);
router.put("/profile", updateDonorProfile);
router.get("/appointments", getAppointments);
router.post("/appointments", createAppointment);
router.get("/donations", getDonationHistory);





export default router;