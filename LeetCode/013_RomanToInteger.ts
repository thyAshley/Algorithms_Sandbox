function romanToInt(s: string): number {
    let hashmap: {[key: string]: number} = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }
    
    let left = 0;
    let right = 1;
    let result = 0;

    while (left < s.length) {
        let combination = s[left] + s[right];
        if (hashmap[combination]) {
          result += hashmap[combination]
          left += 2;
          right += 2;
        } else {
          result += hashmap[s[left]];
          left += 1;
          right += 1;
        }

    }
    console.log(result)
    return result;
};

romanToInt('MCMXCIV');