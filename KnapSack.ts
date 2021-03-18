interface Item {
    name: string;
    value: number;
    weight: number;
}

interface Sack {
    items : [];
    value: number;
    weight: number;
}

function knapsackFN(items: Item[], maxWeight: number, itemIndex: number): {} {
    console.log('running')
    if (maxWeight ===0 || itemIndex < 0) {
        return {items: [], value: 0, weight: 0};
    }

    if (maxWeight < items[itemIndex].weight) {
        return knapsackFN(items, maxWeight, itemIndex-1)
    }
    
    const sackWithItem: any = knapsackFN(items, maxWeight - items[itemIndex].weight, itemIndex-1)
    const sackWithoutItem: any = knapsackFN(items, maxWeight, itemIndex-1)
    const valueWithItem= sackWithItem.value + items[itemIndex].value;
    const valueWithoutItem = sackWithoutItem.value;

    if (valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: valueWithItem,
            weight: sackWithItem.weight + items[itemIndex].weight
        }
        return updatedSack
    } else {
        return sackWithoutItem
    }

}

const items = [
    {name: 'a', value: 3, weight: 3},
    {name: 'b', value: 6, weight: 8},
    {name: 'c', value: 10, weight: 3},
]



const maxWeight = 8;
console.log(knapsackFN(items, maxWeight, items.length - 1));