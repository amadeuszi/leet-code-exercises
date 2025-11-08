class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}
  
 
function cloneGraph(node: _Node | null, visited = new Map<number, _Node>()): _Node | null {
    if (!node) {
        return null
    }

    if (visited.get(node.val)) {
        return visited.get(node.val) ?? null
    }

    const copy = new _Node(node.val)
    visited.set(node.val, copy)

    copy.neighbors = node.neighbors
        .map((vertex) => cloneGraph(vertex, visited))
        .filter(Boolean) as _Node[]

    return copy
}