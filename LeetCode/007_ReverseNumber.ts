function reverse(x: number): number {
    let limit = 2 ** 31
    let sign = (x < 0) ? -1 : 1
    const reverseResult = +((x * sign).toString().split('').reverse().join('')) * sign

    if (reverseResult >= limit - 1 || reverseResult <= -limit) {
      return 0;
    }
    return reverseResult
};

