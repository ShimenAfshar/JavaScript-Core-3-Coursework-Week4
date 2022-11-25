let add = require("./calculator");

test("to add numbers passed in as string", function () {
  let input = "";
  let expected = 0;
  let output = add(input);

  let input1 = "5";
  let expected1 = 5;
  let output1 = add(input1);

  let input2 = "3,6";
  let expected2 = 9;
  let output2 = add(input2);

  let input3 = "2,1001";
  let expected3 = 2;
  let output3 = add(input3);

  let input5 = "1,2,3,0,5";
  let expected5 = 11;
  let output5 = add(input5);

  expect(output).toEqual(expected);
  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
  expect(output3).toEqual(expected3);

  expect(output5).toEqual(expected5);
});

// test("invalidate negative number", () => {
//   let input4 = "1,4,-1";
//   // let expected4 = "negatives not allowed: -1";
//   let output4 = add(input4);
//   expect(output4).toThrowError();
// });

test("invalidate negative number", () => {
  let input4 = "1, 4, -1";
  let arr = input4.split(",").map((num) => Number(num));
  let negativeNumbers = arr.filter((n) => n < 0);
  let expected4 = `negatives not allowed: ${negativeNumbers.join(", ")}`;
  expect(() => {
    add(input4);
  }).toThrow(expected4);
});