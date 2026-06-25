import { Router } from "express";
import apiController from "../controllers/api.controller.js";
const router = Router();

router.post("/calculate-gross-pay", apiController.calculateGrossPay);

export default router;
