const distance = (graph: Map<string, Map<string, number>>, from: string, to: string, visited: Set<string>): number => {
    if (!graph.has(from)) {
        return Infinity;
    }
    if (from === to) {
        return 1
    }
    if (visited.has(from)) {
        return Infinity
    }
    visited.add(from)
    let d = Infinity
    for (const [next, weight] of graph.get(from)!) {
        d = Math.min(d, distance(graph, next, to, visited) * weight)
    }
    return d;
}

export function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph = new Map<string, Map<string, number>>()

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i]
        const value = values[i]
        if (!graph.has(a)) {
            graph.set(a, new Map())
        }
        graph.get(a)!.set(b, value)
    
        if (!graph.has(b)) {
            graph.set(b, new Map())
        }
        graph.get(b)!.set(a, 1 / value)
    }
    
    const result = queries
        .map(([a, b]) => distance(graph, a, b, new Set()))
        .map(d => d === Infinity ? -1 : d)
    console.log(result)
    return result
}
