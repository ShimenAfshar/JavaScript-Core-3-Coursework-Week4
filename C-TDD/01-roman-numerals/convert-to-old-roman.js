function convertToOldRoman(n) {
  let romans = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = "";

  for (let key in romans) {
    if (n === romans[key]) {
      return (result += key);
    } else if (n > romans[key]) {
      result += key.repeat(parseInt(n / romans[key]));
      n = n % romans[key];
    }
  }
  return result;
}
// console.log(convertToOldRoman(15));
module.exports = convertToOldRoman;