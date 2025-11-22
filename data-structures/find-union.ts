export class FindUnion {
    parents: number[];
    size: number[];

    constructor(size: number) {
        this.parents = Array(size).fill(0).map((_, index) => index)
        this.size = Array(size).fill(1)
    }

    find(node: number): number {
        if (this.parents[node] === node) {
            return node
        }
        const parent = this.find(this.parents[node])
        this.parents[node] = parent

        return parent
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
        this.parents[parentB] = parentA
        this.size[parentA] += this.size[parentB]
    }

    isSame(a: number, b: number): boolean {
        return this.find(a) === this.find(b)
    }
}