/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here

  //convert number to string
  let str = num.toString();

  // initialize squares string to empty
  let squares = "";

  // iterate through digits in string
  for(digit of str){
    // calculate square of current digit (digit ^ 2)
    let square = Math.pow(Number(digit), 2);

    // concatenate squares with current digit 
    squares = squares + square.toString();
  }

  // return squares as number data type
  return Number(squares);
}

