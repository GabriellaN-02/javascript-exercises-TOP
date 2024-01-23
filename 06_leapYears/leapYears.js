const leapYears = function (year) {
  // true if divisible by 100 and 400
  if (year % 100 === 0 && year % 400 === 0) return true;

  // false if divisible by 100
  if (year % 100 === 0) return false;

  // true if divisible by 4
  if (year % 4 === 0) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
