function findCenter(edges: number[][]): number {
    const first = edges[0]
    const second = edges[1]
    const all = [...first, ...second]
    all.sort((a, b) => a - b)
    for (let i = 0; i < all.length; i++) {
        if (all[i] === all[i + 1]) {
            return all[i]
        }
    }
    return -1
};