import apiService from "../services/api.service.js";
import AppError from "../utils/error.js";

const netPay = (req, res, next) => {
  try {
    const grossPay = req.grossPay;
    console.log(grossPay);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

const calculateGrossPay = (req, res, next) => {
  try {
    console.log(req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {}
};

const calculateHousingLevy = (req, res, next) => {
  try {
    apiService.calculateHousingLevy(grossPay);
  } catch (error) {}
};

export default { netPay, calculateGrossPay, calculateHousingLevy };
