// Best: O(1)
// Worst: O(log(n))

const arr = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

function binarySearch(arr: string[], value: string) {
    let start = 0;
    let end = arr.length - 1;
    let pointer =  Math.floor((end+start)/2)
    while(arr[pointer] !== value) {
        if (arr[pointer] > value) {
            end = pointer - 1;
        }
        if (arr[pointer] < value) {
            start = pointer + 1;
        }
        if (start === end) {
            return -1;
        }
        pointer =  Math.floor((end+start)/2)
    }
    return arr[pointer] === value ? pointer: -1
}


console.log(binarySearch(arr, 'Alasbama'));