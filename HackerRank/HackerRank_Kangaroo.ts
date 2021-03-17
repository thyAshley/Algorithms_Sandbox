function kangaroo(x1: number, v1: number, x2: number, v2:number) {
    if (x1 > x2 && v1 > v2) return 'No';
    if (x2 > x1 && v2 > v1) return 'No';
    if (x1 === x2) return 'Yes';
    if (v1 > v2) {
        while (x1 < x2) {
            x1 += v1;
            x2 += v2;
            if (x1 === x2) {
                return 'Yes'
            }
        }
    }
    if (v2 > v1) {
        while (x1 > x2) {
            x1 += v1;
            x2 += v2;
            if (x1 === x2) {
                return 'Yes'
            }
        }
    }
    return 'No';
}

console.log(kangaroo(0,3,4,2))