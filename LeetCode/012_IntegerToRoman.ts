function romanToInt(s: string): number {
    let result = 0;
    
    let left = 0;
    let right = 1;
    while (right < s.length) {
        right++
        if (['I', 'X', 'C'].includes(s[left])){
            console.log(true)
        }
    }
    return result;
};

romanToInt('III');