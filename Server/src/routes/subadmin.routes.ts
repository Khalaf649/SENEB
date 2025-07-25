import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth.middleware.ts";
import roleMiddlware from "../middlewares/role.middleware";
import {getSubAdminProfile,getCenterData,getDonationHistory,getAppointments} from '../controllers/subadmin.controller.js'

router.use(authMiddleware); // Apply auth middleware to all routes in this router
router.use(roleMiddlware(["sub_admin"])); // Apply role middleware to all routes in this router

router.get("/profile", getSubAdminProfile);
router.get("/centerData", getCenterData);
router.get("/donations", getDonationHistory);
router.get("/appointments", getAppointments);










export default router;