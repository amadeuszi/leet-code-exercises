import { FindUnion } from '../find-union';

describe('FindUnion', () => {
  describe('constructor', () => {
    test('should initialize with correct size', () => {
      const findUnion = new FindUnion(5);
      expect(findUnion.parents).toEqual([ 0, 1, 2, 3, 4 ]);
      expect(findUnion.size).toEqual([ 1, 1, 1, 1, 1 ]);
    });
  });

  describe('find', () => {
    test('should return the node itself when it is the root', () => {
      const findUnion = new FindUnion(5);
      expect(findUnion.find(0)).toBe(0);
      expect(findUnion.find(1)).toBe(1);
      expect(findUnion.find(4)).toBe(4);
    });

    test('should return root after union operations', () => {
      const findUnion = new FindUnion(5);
      findUnion.union(0, 1);
      findUnion.union(2, 3);

      expect(findUnion.find(1)).toBe(findUnion.find(0));
      expect(findUnion.find(2)).not.toBe(findUnion.find(0))
      expect(findUnion.find(3)).not.toBe(findUnion.find(0))
      expect(findUnion.find(2)).toBe(findUnion.find(3))
    });

    test('should apply path compression', () => {
      const findUnion = new FindUnion(5);
      // path 0 -> 1 -> 2 -> 3 -> 4
      findUnion.parents[0] = 1
      findUnion.parents[1] = 2
      findUnion.parents[2] = 3
      findUnion.parents[3] = 4
      // After find(2), parent of 2 should be directly pointing to root
      findUnion.find(1);
      expect(findUnion.parents[0]).toBe(1);
      expect(findUnion.parents[1]).toBe(4);
      expect(findUnion.parents[2]).toBe(4);
      expect(findUnion.parents[3]).toBe(4);
      expect(findUnion.parents[4]).toBe(4);
    });
  });

  describe('union', () => {
    test('should union two different components', () => {
      const findUnion = new FindUnion(5);
      findUnion.union(0, 1);
      expect(findUnion.isSame(0, 1)).toBe(true);
    });

    test('should not change anything when unioning same component', () => {
      const findUnion = new FindUnion(5);
      findUnion.union(0, 1);
      const parentsBefore = [ ...findUnion.parents ];
      const sizeBefore = [ ...findUnion.size ];

      findUnion.union(0, 1);

      expect(findUnion.parents).toEqual(parentsBefore);
      expect(findUnion.size).toEqual(sizeBefore);
    });

    test('should union by size correctly', () => {
      const findUnion = new FindUnion(5);
      // Create components of different sizes
      findUnion.union(0, 1); // Component size 2
      findUnion.union(2, 3); // Component size 2
      findUnion.union(2, 4); // Component size 3

      const smallerRoot = findUnion.find(0)
      const largerRoot = findUnion.find(2)
      expect(smallerRoot).not.toBe(largerRoot)
      // Union the two components - smaller should remain root
      findUnion.union(0, 2);
      expect(findUnion.find(2)).toBe(smallerRoot)
    });
  });

  describe('isSame', () => {
    test('should return false for disconnected nodes', () => {
      const findUnion = new FindUnion(5);
      expect(findUnion.isSame(0, 1)).toBe(false);
      expect(findUnion.isSame(2, 4)).toBe(false);
    });

    test('should return true for connected nodes', () => {
      const findUnion = new FindUnion(5);
      findUnion.union(0, 1);
      expect(findUnion.isSame(0, 1)).toBe(true);
    });

    test('should return true for transitively connected nodes', () => {
      const findUnion = new FindUnion(5);
      findUnion.union(0, 1);
      findUnion.union(1, 2);
      expect(findUnion.isSame(0, 2)).toBe(true);
    });

    test('should return true for same node', () => {
      const findUnion = new FindUnion(5);
      expect(findUnion.isSame(0, 0)).toBe(true);
      expect(findUnion.isSame(3, 3)).toBe(true);
    });
  });

  describe('complex scenarios', () => {
    test('should handle multiple unions and finds correctly', () => {
      const findUnion = new FindUnion(10);

      // Create several components
      findUnion.union(0, 1);
      findUnion.union(2, 3);
      findUnion.union(4, 5);
      findUnion.union(6, 7);

      // Verify separate components
      expect(findUnion.isSame(0, 2)).toBe(false);
      expect(findUnion.isSame(4, 6)).toBe(false);

      // Union components together
      findUnion.union(0, 2); // Connect first two components
      findUnion.union(4, 6); // Connect last two components

      // Verify connections within merged components
      expect(findUnion.isSame(0, 3)).toBe(true);
      expect(findUnion.isSame(1, 2)).toBe(true);
      expect(findUnion.isSame(4, 7)).toBe(true);
      expect(findUnion.isSame(5, 6)).toBe(true);

      // Verify still separate
      expect(findUnion.isSame(0, 4)).toBe(false);

      // Final union
      findUnion.union(3, 5);
      expect(findUnion.isSame(0, 7)).toBe(true);
      expect(findUnion.isSame(0, 4)).toBe(true);
    });
  });
});
