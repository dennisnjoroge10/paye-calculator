import AppError from "../utils/error.js";

// net pay endpoint validation middleware
const netPay = (req, res, next) => {
  if (
    req.body.grossPay === undefined ||
    req.body.grossPay === null ||
    req.body.grossPay === ""
  ) {
    throw new AppError("Gross pay is required", 400);
  }

  const grossPay = Number(req.body.grossPay);

  if (isNaN(grossPay) || grossPay < 0) {
    throw new AppError("Invalid gross pay", 400);
  }

  req.grossPay = grossPay;

  next();
};

export default { netPay };
