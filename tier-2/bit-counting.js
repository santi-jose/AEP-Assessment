/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  //Solution goes here

  // variables to use for decimal to binary conversion
  let quotient = num; // decimal value to convert to binary
  let remainder = 0; // remainder variable used in binary representation
  let ones = 0; // count of ones in binary representation

  // while our num is non-zero
  while(quotient > 0){

    // calculate remainder of modulo 2
    remainder = quotient % 2;

    // if we have a one digit in our binary representation
    if(remainder === 1){
      ones = ones + 1; // increment ones counter
    }

    // reassign quotient
    // use Math.floor to avoid infinitely divisible floating point numbers
    quotient = Math.floor(quotient/2);
  }

  return ones;
}