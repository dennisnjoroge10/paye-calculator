import { calculateNSSF } from "../modules/nssf.js";
import { calculateSHIF } from "../modules/shif.js";
import { calculateHousingLevy } from "../modules/housingLevy.js";
import { calculatePAYE } from "../modules/paye.js";

const calculateNetPay = (grossPay) => {
  // calculate nssf
  const nssf = calculateNSSF(grossPay);
  // calculate shif
  const shif = calculateSHIF(grossPay);
  // calculate housing levy
  const housingLevy = calculateHousingLevy(grossPay);

  // total deductions
  const preTaxDeductions = nssf + shif + housingLevy;

  // taxable income
  const taxableIncome = grossPay - preTaxDeductions;

  // paye , income tax, personal relief
  const { payeTotal, incomeTax, personalRelief } = calculatePAYE(taxableIncome);

  const totalDeductions = preTaxDeductions + payeTotal;

  const netPay = taxableIncome - payeTotal;

  return {
    earnings: {
      grossPay,
    },
    preTaxDeductions: {
      nssf,
      shif,
      housingLevy,
      totalPreTax: preTaxDeductions,
    },
    payeDeductions: {
      taxableIncome,
      incomeTax,
      personalRelief,
      payeTotal,
    },
    netPay,
  };
};

export default { calculateNetPay };
