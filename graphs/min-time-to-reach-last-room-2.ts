export class PriorityQueue2<T extends number | number[] = number> {
  private heap: T[] = []

  private swap(x: number, y: number): void {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]]
  }

  get size() {
    return this.heap.length
  }

  get empty() {
    return this.size === 0
  }

  private getValue(item: T): number {
    if (Array.isArray(item)) {
      return item[0] as number
    }
    return item as number
  }

  private up(index: number) {
    let current = index
    let parent = this.parent(current)

    while (current !== 0 && this.getValue(this.heap[current]) < this.getValue(this.heap[parent])) {
      this.swap(current, parent)
      current = parent
      parent = this.parent(current)
    }
  }

  private left(index: number) {
    return index * 2 + 1
  }

  private right(index: number) {
    return index * 2 + 2
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2)
  }

  private down(index: number) {
    let smallest = index
    let left = this.left(index)
    let right = this.right(index)
    if (left < this.size && this.getValue(this.heap[left]) < this.getValue(this.heap[smallest])) {
      smallest = left
    }
    if (right < this.size && this.getValue(this.heap[right]) < this.getValue(this.heap[smallest])) {
      smallest = right
    }
    if (smallest === index) {
      return
    }
    this.swap(smallest, index)
    this.down(smallest)
  }

  push(value: T): void {
    this.heap.push(value)
    this.up(this.size - 1)
  }

  pop(): T {
    if (this.size === 0) {
      throw new Error("Cannot pop from empty priority queue")
    }
    const value = this.heap[0]
    this.swap(0, this.size - 1)
    this.heap.pop()
    this.down(0)
    return value
  }

  peek(): T {
    if (this.size === 0) {
      throw new Error("Cannot peek from empty priority queue")
    }
    return this.heap[0]
  }
}

const getNeighbors = (i: number, j: number, n: number, m: number): number[][] => {
    return [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1]
    ].filter(([k, l]) => {
        return 0 <= k && k < n && 0 <= l && l < m
    })
}

export function minTimeToReach(moveTime: number[][]): number {
    const n = moveTime.length
    const m = moveTime[0].length
    const distances: number[][] = Array(n).fill(0).map(() => Array(m).fill(Infinity))
    const visited: boolean[][] = Array(n).fill(0).map(() => Array(m).fill(false))

    const q = new PriorityQueue2<number[]>()
    q.push([0, 0, 0, 1])
    distances[0][0] = 0

    while (!q.empty) {
        const [distance, i, j, time] = q.pop()
        if (visited[i][j]) {
            continue
        }
        if (i === n && j === m) {
          return distance
        }
        distances[i][j] = distance
        visited[i][j] = true
        for (const [k, l] of getNeighbors(i, j, n, m)) {
            if (visited[k][l]) {
                continue
            }
            const nextDistance = Math.max(distance + time, moveTime[k][l] + time)
            const nextTime = time % 2 + 1
            if (nextDistance < distances[k][l]) {
              distances[k][l] = nextDistance
              q.push([nextDistance, k, l, nextTime])
            }
        }
    }
    return distances[distances.length - 1][distances[0].length - 1]
};