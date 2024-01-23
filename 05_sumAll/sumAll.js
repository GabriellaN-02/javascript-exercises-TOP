const sumAll = function (startNum, endNum) {
  let sum = 0;
  let bigger = startNum;

  // ERROR if negative numbers or not numbers
  if (startNum < 0 || endNum < 0) return "ERROR";
  if (typeof startNum !== "number" || typeof endNum !== "number") return "ERROR";

  if (endNum < bigger) {
    for (let i = endNum; i <= bigger; i++) sum += i;
  } else {
    for (let i = bigger; i <= endNum; i++) sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
