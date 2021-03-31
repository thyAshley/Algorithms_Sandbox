interface Item {
    name: string;
    value: number;
    weight: number;
}

interface Sack {
    items : Item[];
    value: number;
    weight: number;
}
const items = [
    {name: 'a', value: 3, weight: 3},
    {name: 'b', value: 60, weight: 8},
    {name: 'c', value: 10, weight: 3},
]

function greedyKnapSack(items: Item[], capacity: number) {
    const sack: Sack = {items: [], value: 0, weight: 0};
    let remainingCapacity = capacity;
    for (const item of items) {
        if (item.weight < remainingCapacity) {
            sack.items.push(item);
            sack.value += item.value;
            sack.weight += item.weight;
            remainingCapacity -= item.weight
        }
    }
    console.log(sack)
}

const maxWeight = 8;
console.log(greedyKnapSack(items, maxWeight));