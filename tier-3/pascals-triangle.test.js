const pascalsTriangleRows = require("./pascals-triangle")

describe("Get the Row in Pascal's Triangle", () => {
  test("1 row should return [[1]]", () => {
    const rows = pascalsTriangleRows(1);

    expect(rows.toString()).toBe([[1]].toString());
  });

  test("5 rows should return [[1], [1,1], [1,2,1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]", () => {
    const rows = pascalsTriangleRows(5);

    expect(rows.toString()).toBe([[1], [1,1], [1,2,1], [1, 3, 3, 1], [1, 4, 6, 4, 1]].toString());
  });

  test("7 rows should return [[1], [1,1], [1,2,1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]]", () => {
    const rows = pascalsTriangleRows(7);

    expect(rows.toString()).toBe([[1], [1,1], [1,2,1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]].toString());
  });
})