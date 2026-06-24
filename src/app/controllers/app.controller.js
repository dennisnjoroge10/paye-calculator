// internal website controllers
const home = (req, res) => {
  res.render("home/index");
};

const grossPayCalc = (req, res) => {
  res.render("gross/index");
};

const nssfCalc = (req, res) => {
  res.render("nssf/index");
};

const shifCalc = (req, res) => {
  res.render("shif/index");
};

const housingLevyCalc = (req, res) => {
  res.render("housing-levy/index");
};

const docs = (req, res) => {
  res.render("docs/index");
};

export default {
  home,
  grossPayCalc,
  nssfCalc,
  shifCalc,
  housingLevyCalc,
  docs,
};
