interface WeightedNodes {
  node: string;
  weight: number;
}

interface PriorityNodes {
  val: any;
  priority: number;
}
class PriorityQueue {
  values: PriorityNodes[];
  constructor() {
    this.values = [];
  }

  enqueue(val: any, priority: number) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  adjacencyList: { [key: string]: WeightedNodes[] };
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(start: string, end: string) {
    const queue = new PriorityQueue();
    const distance: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const path = [];
    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (queue.values.length) {
      let smallest = queue.dequeue()!.val;
      if (smallest === end) {
        while (previous[smallest]) {
          console.log(path);
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      // get all neighbours
      if (smallest || distance[smallest] !== Infinity) {
        for (let connection of this.adjacencyList[smallest]) {
          // calculate distance to neighbor node.
          let candidate = distance[smallest] + connection.weight;
          let nextNode = connection.node;
          if (candidate < distance[nextNode]) {
            // updating distance to neighbour and previous table
            distance[nextNode] = candidate;
            previous[nextNode] = smallest;
            queue.enqueue(nextNode, candidate);
          }
        }
      }
    }
    path.push(start);
    console.log(path.reverse());
    return path.reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("D", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);
graph.addEdge("C", "F", 4);
graph.shortestPath("A", "E");
