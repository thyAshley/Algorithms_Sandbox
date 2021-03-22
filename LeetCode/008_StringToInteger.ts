function myAtoi(s: string): number {
    let stringArray = s.trim().split(' ')[0];
    let limit = 2 ** 31;
   let sign = 1;
   let result = []
   for (let i = 0; i < stringArray.length; i++) {
     if (i === 0 && stringArray[i] === '-') {
       sign *= -1
       continue;
     }
     if (i === 0 && stringArray[i] === '+') {
       sign *= 1
       continue;
     }
     if (+stringArray[i] >= 0 && +stringArray[i] < 10) {
       result.push(stringArray[i])
     } else {
       break;
     }
 
   }
   let value = +result.join('') * sign
 
   if (value > limit - 1) {
     return limit - 1;
   }
 
   if (value < -limit) {
     return -limit
   }
 
   return value
 }
 
 console.log(myAtoi("21474836460"))
 