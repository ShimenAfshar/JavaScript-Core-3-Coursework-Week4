// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let newArray = numbers.filter((i) => typeof i === "number");
    let totalValue = newArray.reduce((a, b) => a + b);
    let average = totalValue / newArray.length;
    return average;
}

module.odule.exports = average;