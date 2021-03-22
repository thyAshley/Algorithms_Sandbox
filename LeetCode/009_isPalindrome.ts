function isPalindrome(x: number): boolean {
    return x === +(x.toString().split('').reverse().join(''))
};