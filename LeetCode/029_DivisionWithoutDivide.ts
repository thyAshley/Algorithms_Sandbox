function divide(dividend: number, divisor: number): number {

  let sign = dividend < 0 ? 
              divisor < 0 ? 1 : -1 :
              divisor < 0 ? -1 : 1;
  
  // neutral
  divisor = divisor < 0 ? divisor * -1 : divisor;
  dividend = dividend < 0 ? dividend * -1 : dividend;

  let iteration = 0;
  let arraylength = divisor;
  let adder = 1;
  let array = [];
  let addition = [];
  while (arraylength <= dividend) {
    array.push(arraylength);
    addition.push(adder);
    arraylength += arraylength
    adder += adder;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    while (dividend >= array[i]) {
      iteration += addition[i];
      dividend -= array[i]
    }
  }

  if (sign === 1 && iteration > 2147483647) return 2147483647
  if (sign === -1 && iteration > 2147483648) return -2147483648
  return sign * iteration ;
};