const ftoc = function (ftemp) {
  return ((ftemp - 32) * 5 / 9);
};

const ctof = function (celtemp) {
  return (celtemp * 9/5) + 32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};