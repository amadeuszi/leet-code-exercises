function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const dist = Array(n).fill([]).map(() => Array(n).fill(Infinity))
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0
    }
    for (const [from, to, weight] of edges) {
        dist[from][to] = weight
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }

    const cities = dist
        .map((distances) => distances.reduce((acc, current) => {
            if (current <= distanceThreshold) {
                return acc + 1
            }
            return acc
        }, 0))

    let mini = Infinity
    let cityIndex = -1

    cities.forEach((city, index) => {
        if (city < mini) {
            mini = city
            cityIndex = index
        }
    })

    return cityIndex
};

console.log(findTheCity(5, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], 2))
