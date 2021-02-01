function naiveStringSearch(str: string, search: string) {
    let count = 0;
    for (let i=0; i<str.length; i++) {
        for (let j=0; j<search.length; j++) {
            if (str[j+i] === search[j]) {
                if (j === search.length - 1) {
                    count++;
                }
                continue;
            } else {
                break;
            }
        }
    }
    console.log(count)
    return count
}

naiveStringSearch('this is the string', 'is')