function TwoSum(array: number[], target: number): boolean {
  let hash: { [key: number]: number } = {};
  for (let i = 0; i < array.length; i++) {
    const compliment = target - array[i];
    if (array[i] in hash) {
      return true;
    }
    hash[compliment] = 1;
  }
  return false;
}

console.log(TwoSum(array, target));
