/**
@param {number} row
@returns {Array<Array<number>>}
*/

module.exports = function (row) {
  //Solution goes here

  console.log(`row: ${row}`);

  // array of arrays to return
  let rows = [row]; // array of rows with row rows

  // iterate through row number of rows to create
  for (let i = 0; i < row; i++) {

      // initialize our new row as empty
      let newRow = [];

      // iterate through digits to add to newRow
      for (let j = 0; j <= i; j++) {
        console.log(`j: ${j}`);
        // if we are at the first or last digit in the row
        if (j === 0 || j === i) {
          // set the value to 1
          newRow[j] = 1;
        } else {
          // else we are in the middle of the row
          // calculate the new value to add to the row
          // newRow @ index j = 
          // previous rows previous (i-1)'s previous digit (j-1) 
          // + previous rows (i-1)'s current digit (j)
          newRow[j] = rows[i - 1][j - 1] + rows[i - 1][j];
        }
      }

    // add new row to our array of rows
    rows[i] = newRow;
  }

  // return array of rows
  return rows;
};
