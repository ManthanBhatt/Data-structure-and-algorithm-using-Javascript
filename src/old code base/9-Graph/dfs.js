/**
 * Graph Data Structure
 * - Data in the graph are called node or vertices
 * - connection between them are called edges
 * 
 * There are two type of graphs directed and undirected
 * 
 * Ways to represent a graph
 * 1. Undirected Graph
 *      const undirectedGraph = {
 *          a: [b],
 *          b: [a,c],
 *          c: [b]
 *      }
 * 2. Adjacency list : Node A - Node B - Node C
 *      const adjMat = [
 *          [a,b,c]
 *         a[0,1,0],
 *         b[1,0,1],
 *         c[0,1,0]
 *      ]
 * 3. Incidence Matrix: rows represent nodes and column represent edges
 *      const incMat = [
 *          [1,2,3,4],//edges
 *         a[0,1,0,0],
 *         b[1,0,0,0],
 *         c[0,0,0,1],
 *         d[1,0,0,0]
 *      ] 
 */

const bfs = (graph, root) => {
    let nodesLen = {};

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    console.log(nodesLen);
    nodesLen[root] = 0;

    let queue = [root];
    let current;
    console.log(queue);
    while (queue.length != 0) {
        current = queue.shift();
        console.log(current);
        let curConnected = graph[current];
        console.log(curConnected);
        let neighborIdx = [];
        let idx = curConnected.indexOf(1);
        console.log(idx);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        console.log(neighborIdx);

        for (let j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}

const exBFSGraph = [
    //[0, 1, 2, 3, 4]
    /**0*/
    [0, 1, 1, 1, 0],
    /**1*/
    [0, 0, 1, 0, 0],
    /**2*/
    [1, 1, 0, 0, 0],
    /**3*/
    [0, 0, 0, 1, 0],
    /**4*/
    [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));