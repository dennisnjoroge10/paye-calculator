const calculateGrossPay = (req, res, next) => {
  try {
    console.log(req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {}
};

export default { calculateGrossPay };
