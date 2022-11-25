let verify = require("./password-validator");

describe("validate 8 characters", function () {
  test("returns Password rejected if password is less than 8 characters", function () {
    let input = "britain";
    let expected = "Password rejected";

    let output = verify(input);

    expect(output).toEqual(expected);
  });
});

describe("reject null passwords", function () {
  test("returns Password rejected if password is null", function () {
    let input = null;
    let expected = "Password rejected";

    let output = verify(input);

    expect(output).toEqual(expected);
  });
});

describe("password contains 1 uppercase letter", function () {
  test("returns Password rejected if password does not contain at least 1 uppercase letter", function () {
    let input = "kingdoms";
    let expected = "Password rejected";

    let output = verify(input);

    expect(output).toEqual(expected);
  });
});

describe("valid passwords contains at least 1 number", function () {
  test("returns Password rejected if password is less than 8 characters", function () {
    let input = "kingDoms";
    let expected = "Password rejected";

    let output = verify(input);

    expect(output).toEqual(expected);
  });
});