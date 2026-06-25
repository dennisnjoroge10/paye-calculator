import { Router } from "express";
import apiController from "../controllers/api.controller.js";
import validationMiddleware from "../middlewares/validation.middleware.js";
const router = Router();

router.post("/net-pay", validationMiddleware.netPay, apiController.netPay);

router.post("/calculate-gross-pay", apiController.calculateGrossPay);

export default router;
