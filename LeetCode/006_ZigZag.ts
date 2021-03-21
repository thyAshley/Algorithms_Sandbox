function convert(s: string, numRows: number): string {
    let array: string[][] = Array.from({length: numRows}, () => []);
    let direction = 0;
    let next = 1;
    for (let i = 0; i < s.length; i++) {
       if (direction === 2) {
         next = -1;
       }
       if (direction === 0) {
         next = 1;
       }
       array[direction].push(s[i]);
       direction += next;
    }
    let result = array.map(row => {
      return ([...row].join(''))
    }).join('')
    return result;
  
  };
  