let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  let num1 = 14;
  let exp1 = 'XIV';

  let num2 = 44;
  let exp2 = "XLIV";

  let num3 = 99;
  let exp3 = "XCIX";

  let num4 = 944;
  let exp4 = "CMXLIV";

  let output1 = convertToNewRoman(num1);
  let output2 = convertToNewRoman(num2);
  let output3 = convertToNewRoman(num3);
  let output4 = convertToNewRoman(num4);

  expect(output1).toEqual(exp1);
  expect(output2).toEqual(exp2);
  expect(output3).toEqual(exp3);
  expect(output4).toEqual(exp4);
});
 