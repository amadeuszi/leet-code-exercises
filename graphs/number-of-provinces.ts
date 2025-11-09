// count: 3
// Input: 1, 2, 3, 4, 5, 6
// 1 -> 2 -> 3
// 4 -> 5
// 6
// Output: 2

// Count: 1
// Input: 1, 2
// 1 -> 2
// Output: 1

// Count: 0
// Input:
// empty graph
// Output: 0

// Count: 3
// Input: 1, 2, 3
// 1
// 2
// 3
// Output: 3


function findCircleNum(isConnected: number[][]): number {
    const neighbors: Map<number, Set<number>> = new Map()
    const v = isConnected.length
    for (let i = 0; i < v; i++) {
        for (let j = 0; j < v; j++) {
            const connected = neighbors.get(i) ?? new Set<number>()
            if (isConnected[i][j] === 1) {
                connected.add(j)
            }
            neighbors.set(i, connected)
        }
    }

    const visited = new Set<number>()
    let count = 0
    const visit = (node: number) => {
        visited.add(node)
        Array.from(neighbors.get(node)?.values() ?? [])
            .forEach((adjacent) => {
                if (!visited.has(adjacent)) {
                    visit(adjacent)
                    visited.add(adjacent)
                }
            })  
    }
    for (let i = 0; i < v; i++) {
        if (visited.has(i)) {
            continue
        }
        count++
        visit(i)        
    }

    return count
}


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))
