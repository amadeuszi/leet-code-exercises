function findCenter(edges: number[][]): number {
    const first = edges[0]
    const second = edges[1]
    return first.find(node => second.includes(node)) ?? -1
};