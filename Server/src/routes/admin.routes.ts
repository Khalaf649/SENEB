import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.ts";
import roleMiddlware from "../middlewares/role.middleware";
const router = Router();
import { validatebloodCenter,validateSubAdmin } from "../validation/admin.validation";
import validateRequest from '../middlewares/validateRequest.ts.js'
import { createBloodCenter,createSubadmin,getFilteredBloodCenters,getBloodCenter,deleteBloodCenter,updateBloodCenter,getAllSubAdmins,deleteSubAdmin } from "../controllers/admin.controller.js";


router.use(authMiddleware); // Apply auth middleware to all routes in this router
router.use(roleMiddlware(["admin"])); // Apply role middleware to all routes in this router


router.post('/createCenter',validatebloodCenter,validateRequest,createBloodCenter)

router.post('/createSubadmin',validateSubAdmin,validateRequest,createSubadmin)
router.get('/getCenters',getFilteredBloodCenters)
router.get("/getCenter/:id", getBloodCenter);
router.delete('/deleteCenter/:id',deleteBloodCenter)
router.put('/updateCenter/:id',validatebloodCenter,validateRequest,updateBloodCenter)


router.get('/getSubAdmins',getAllSubAdmins)
router.delete("/deleteSubadmin/:id", deleteSubAdmin);








export default router;