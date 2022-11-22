let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
 let num1 = 7;
 let exp1 = "VII";

 let num2 = 15;
 let exp2 = "XV";
 
 let num3 = 18;
 let exp3 = "XVIII";

 let num4 = 22;
 let exp4 = "XXII";

 let output1 = convertToOldRoman(num1);
 let output2 = convertToOldRoman(num2);
 let output3 = convertToOldRoman(num3);
 let output4 = convertToOldRoman(num4);

 expect(output1).toEqual(exp1);
 expect(output2).toEqual(exp2);
 expect(output3).toEqual(exp3);
 expect(output4).toEqual(exp4);

});
 