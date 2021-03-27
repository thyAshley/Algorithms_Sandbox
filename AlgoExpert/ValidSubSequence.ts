function validSubSequence(array: number[], target: number[]) {
  if (target.length > array.length) return false;
  let j = 0;
  for (
    let i = 0;
    i < array.length && array.length >= target.length + i - j;
    i++
  ) {
    if (j === target.length) break;
    if (array[i] === target[j]) {
      console.log(target[j]);
      j++;
    }
  }

  return j === target.length;
}
