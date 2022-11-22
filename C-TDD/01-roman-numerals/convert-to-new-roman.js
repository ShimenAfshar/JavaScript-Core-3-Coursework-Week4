function convertToNewRoman(n) {
  let romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (let key in romans) {
    while (n >= romans[key]) {
      result += key;
      n -= romans[key];
      // console.log(result);
    }
  }
  return result;
}
// console.log(convertToNewRoman(3944));
module.exports = convertToNewRoman;