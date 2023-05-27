// check a number if it a power of 2 number
// 

function isTwoPower(num) {
// when you take a power of 2 and divide it by 2, it should return another power of 2 number
// (2^n)/2 = (2^n-1) ..... continue until you reach 2^1 which is 2. 

  if(num === 1){
    return true;
  } else if (num%2 === 0 && num !== 0) {
    return isTwoPower(num/2);
  } else {
    return false;
  }

}

/**
 * test input 2*2*5 = 20 
 *  - num is even, return isTwoPower(10) --> return (5) --> return false
 * 
 */

console.log("first call ",isTwoPower(128));
console.log("second call ",isTwoPower(127));
console.log("third call ", isTwoPower(0));
console.log("fourth Call ", isTwoPower(80));


while(num !== 1) {
  if (num%2 === 0 && num !== 0) {
    num/=2
  } else {
    return false;
  }

}