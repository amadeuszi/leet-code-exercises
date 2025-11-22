export class PriorityQueue<T extends number | number[] = number> {
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
