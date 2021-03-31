function flatern(nestedArray) {
    let result = [];
    for (let i = 0; i < nestedArray.length; i++) {
      let target = nestedArray[i]
      if (typeof target === 'object') {
        let temp = flatern(target);
        let newExtendedArray = result.concat(temp);
        result = newExtendedArray;
      } else {
        result.push(nestedArray[i])
      }
    }
    return result;
  }
  
  let input = [1, [2,3,[4]],3,4,[[4,5],[6,7,8]]];
  
  let output = flatern(input);
  
  console.log(output);    // [1, 2]
  
  // loop through the array, for each element, we check if it is a array
  // if is array, 
  
  