// function add(numbers) {
//   let newArr = numbers.split(",").map((num) => Number(num));
//   let total = 0;
//   try {
//     newArr.forEach((num) => {
//       if (num < 0) throw new Error(`negatives not allowed: ${num}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   newArr.filter((num) => {
//     if (num <= 1000 && num > 0) {
//       total += num;
//     }
//   });
//   return total;
// }

function add(numbers) {
  let newArr = numbers.split(",").map((num) => Number(num));
  let total = 0;
  let negativeNumbers = [];
  newArr.forEach((num) => {
    if (num < 0) {
      negativeNumbers.push(num);
    } else if (num <= 1000 && num > 0) {
      total += num;
    }
  });
  if (negativeNumbers.length) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
  }
  return total;
}
// console.log(add("0,1,9,-7,90,"));
module.exports = add;