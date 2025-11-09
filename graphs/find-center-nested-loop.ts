function findCenter(edges: number[][]): number {
    const first = edges[0]
    const second = edges[1]
    for (const firstNode of first) {
        for (const secondNode of second) {
            if (firstNode === secondNode) {
                return firstNode
            }
        }
    }
    return -1
};