/**
@param {number} row
@returns {Array<Array<number>>}
*/

module.exports = function (row) {
  //Solution goes here

  console.log(`row: ${row}`);

  // array of arrays to return
  let rows = [row]; // array of rows with row rows
  let newRow = []; // array of numbers

  // if we are given an input of 1 rows
  if (row === 1) {
    // create a pascal triangle of 1 row
    newRow[0] = 1;
    rows[0] = newRow;
  } else {
    // iterate through input number of rows to create
    for (let i = 0; i < row; i++) {
      console.log(`i: ${i}`);

      // create newRow variable to store new row to add to rows
      newRow = [];

      // iterate through digits to add to newRow
      for (let j = 0; j < i; j++) {
        console.log(`j: ${j}`);
        // if we are at the first or last digit in the row
        if (j === 0 || j === i - 1) {
          // set the value to 1
          newRow[j] = 1;
        } else {
          // else we are in the middle of the row
          // calculate the new value to add to the row
          newRow[j] = rows[i - 1][j - 1] + rows[i - 1][j];
        }

        console.log(`new number: ${newRow[j]}`);
      }

      rows[i] = newRow;
    }
  }

  return rows;
};
