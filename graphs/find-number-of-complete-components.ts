type Graph = Map<number, Set<number>>

const getComponent = (
    node: number, visited: Set<number>, graph: Graph, group: number[]
): number[] => {
    if (visited.has(node)) {
        return group
    }
    visited.add(node)
    group.push(node)

    for (const next of graph.get(node) ?? []) {
        getComponent(next, visited, graph, group)
    }
    return group
}

const isComponentComplete = (group: number[], graph: Graph): boolean => {
    const expectedDegree = group.length - 1
    return group.every(member => graph.get(member)?.size === expectedDegree)
}

const buildGraph = (n: number, edges: number[][]): Graph => {
    const graph = new Map<number, Set<number>>()

    for (let i = 0; i < n; i++) {
        graph.set(i, new Set())
    }
    for (const [from, to] of edges) {
        graph.get(from)?.add(to)
        graph.get(to)?.add(from)
    }

    return graph
}

function countCompleteComponents(n: number, edges: number[][]): number {
    let count = 0
    const visited = new Set<number>()
    const graph = buildGraph(n, edges)

    for (let i = 0; i < n; i++) {
        if (visited.has(i)) {
            continue
        }
        const group = getComponent(i, visited, graph, [])
        if (isComponentComplete(group, graph)) {
            count++
        }
    }
    return count
};

console.log(countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4]]))