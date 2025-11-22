import { PriorityQueue } from "../../data-structures/priority-queue"

const dijkstra = (edges: [number, number, number][], start: number): Map<number, number> => {
    const graph: Map<number, Map<number, number>> = new Map()
    for (const [from, to, weight] of edges) {
        const adjacent = graph.get(from) ?? new Map<number, number>()
        adjacent.set(to, weight)
        graph.set(from, adjacent)
    }

    const q = new PriorityQueue<number[]>()
    q.push([0, start])

    const visited = new Set<number>()
    const distances = new Map<number, number>()

    while (!q.empty) {
        const [distance, to] = q.pop()
        if (visited.has(to)) {
            continue
        }
        visited.add(to)

        for (const [next, weight] of graph.get(to) ?? []) {
            const nextDistance = distance + weight
            if (!visited.has(next) && nextDistance < (distances.get(next) ?? Infinity)) {
                q.push([nextDistance, next])
                distances.set(next, nextDistance)
            }
        }
    }

    return distances
}