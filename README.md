# LeetCode Solutions

My collection of algorithms and data structures from solving LeetCode problems. I use this to practice coding and learn new concepts.

https://leetcode.com/problemset/algorithms/

## How to run tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Directory structure

- `data-structures/`
  - `priority-queue.ts` - Min-heap priority queue implementation
  - `find-union.ts` - Union-Find (Disjoint Set) data structure
- `graphs/` - Graph-related algorithms and problems
  - `algorithms/dijkstra.ts` - Dijkstra's shortest path algorithm
  - `minimal-spanning-tree-kruskal.ts` - Kruskal's MST algorithm
  - `find-city-with-smallest-number-of-neighbors.ts` - Floyd-Warshall all-pairs shortest path
- `trees/` - Binary tree algorithms and problems
- `greedy/` - Greedy algorithm solutions
  - `container-with-most-water/` - Two-pointer greedy approach
  - `longest-substring-without-repeating/` - Sliding window technique
  - `3sum/`, `3sum-closest/` - Multiple pointer strategies
- `divide-and-conquer/` - Divide and conquer algorithms
  - `quick-sort.ts` - Quick sort implementation
