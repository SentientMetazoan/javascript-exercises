const ftoc = function(temp) {
  let res = (temp-32)/1.8;
  return Number.parseFloat(res.toFixed(1))
};

const ctof = function(temp) {
  let res = temp * 1.8 + 32;
  return Number.parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
