const bitCount = require("./bit-counting")

describe("Bit Counting", () => {
  test("Counting 24 should return 2", () => {
    const counted = bitCount(24);

    expect(counted).toBe(2);
  });

  test("Counting 1234 should return 5", () => {
    const counted = bitCount(1234);

    expect(counted).toBe(5);
  });

  test("Counting 26127 should return 8", () => {
    const counted = bitCount(26127);

    expect(counted).toBe(8);
  });
})