interface WeightedNodes {
  node: string;
  weight: number;
}

class WeightedGraph {
  adjacencyList: {[key: string]: WeightedNodes[]};
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex: string) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
      this.adjacencyList[vertex1].push({node: vertex2, weight})
      this.adjacencyList[vertex2].push({node: vertex1, weight})
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B", 10)
graph.addEdge("A","C", 5)
console.log(graph);