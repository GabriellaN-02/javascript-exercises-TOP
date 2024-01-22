const repeatString = function (string, num) {
  for (let i = 0; i <= num; i++) {
    if (i === num) return string.repeat(i);
  }
  if (num < 0) return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
