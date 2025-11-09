function allPathsSourceTarget(graph: number[][]): number[][] {
    const dfs = (node: number, path: number[] = []): number[][] => {
        const copy = [...path]
        copy.push(node)
        if (node === graph.length - 1) {
            return [copy]
        } else {
            return graph[node].flatMap(next => dfs(next, copy))
        }
    }

    return dfs(0)
};