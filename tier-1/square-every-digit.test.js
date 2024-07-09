const squareEveryDigit = require("./square-every-digit");

describe("Square Every Digit", () => {
  test("Square 79", () => {
    const everyDigitSquared = squareEveryDigit(79);

    expect(everyDigitSquared).toBe(4981);
  });

  test("Square 9119", () => {
    const everyDigitSquared = squareEveryDigit(9119);

    expect(everyDigitSquared).toBe(811181);
  });

  test("Square 111111", () => {
    const everyDigitSquared = squareEveryDigit(111111);

    expect(everyDigitSquared).toBe(111111);
  });
});