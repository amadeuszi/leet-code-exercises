function canVisitAllRooms(rooms: number[][]): boolean {
    const q = [0]
    let head = 0
    const visited = new Set()
    visited.add(0)

    while (head < q.length) {
        const current = q[head++]
        for (const next of rooms[current]) {
            if (!visited.has(next)) {
                q.push(next)
                visited.add(next)
            }
        }        
    }

    return visited.size === rooms.length
};
