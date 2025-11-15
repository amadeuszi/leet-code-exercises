class Union {
    size: number[] = [];
    parent: number[] = [];
    
    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.size.push(1)
            this.parent.push(i)
        }
    }

    find(node: number) {
        if (this.parent[node] === node) {
            return node
        }
        this.parent[node] = this.find(this.parent[node])
        return this.parent[node]
    }

    union(a: number, b: number): void {
        let parentA = this.find(a)
        let parentB = this.find(b)

        if (parentA === parentB) {
            return
        }
        if (this.size[parentA] > this.size[parentB]) {
            [parentA, parentB] = [parentB, parentA]
        }
        this.parent[parentB] = parentA
        this.size[parentA] += this.size[parentB]
    }

    isSame(a: number, b: number): boolean {
        return this.find(a) === this.find(b)
    }
}

function minCostConnectPoints(points: number[][]): number {
    const edges: number[][] = []
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue
            }
            const [x, y] = points[i]
            const [a, b] = points[j]
            const l = Math.abs(x - a) + Math.abs(y - b)
            edges.push([i, j, l])
        }
    }
    edges.sort((a, b) => a[2] - b[2])

    let cost = 0
    const union = new Union(points.length)
    let edgesCount = 0
    for (const edge of edges) {
        const [a, b, weight] = edge
        if (union.isSame(a, b)) {
            continue
        }
        union.union(a, b)
        cost += weight
        edgesCount++
        if (edgesCount === points.length - 1) {
            return cost
        }
    }

    return 0
};


