class Graph {
  private adjacencyList: { [key: number]: number[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: any) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: any, vertex2: any) {
    let first = this.adjacencyList[vertex1];
    let second = this.adjacencyList[vertex2];
    if (first && second) {
      first.push(vertex2);
      second.push(vertex1);
    }
  }

  removeEdge(vertex1: any, vertex2: any) {
    let first = this.adjacencyList[vertex1];
    let second = this.adjacencyList[vertex2];
    if (first && second) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }

  removeVertex(vertex: any) {
    if (this.adjacencyList[vertex]) {
      let edges = this.adjacencyList[vertex];
      for (let edge of edges) {
        this.removeEdge(vertex, edge);
      }
      delete this.adjacencyList[vertex];
    }
  }

  DFS_Iterative(start: any) {
    const stack = [start];
    const result = [];
    const visited: { [key: string]: boolean } = {};
    visited[start] = true;
    while (stack.length) {
      let current = stack.shift();
      result.push(current);
      this.adjacencyList[current].forEach((connection) => {
        if (!visited[connection]) {
          visited[connection] = true;
          stack.unshift(connection);
        }
      });
    }
    console.log(result);
    return result;
  }

  DFS_Recursive(vertex: any) {
    const visited: { [key: string]: boolean } = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex: any) {
      if (vertex.length === 0) return;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((connection) => {
        if (!visited[connection]) {
          return DFS(connection);
        }
      });
    })(vertex);

    console.log(result);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.DFS_Iterative("A");
