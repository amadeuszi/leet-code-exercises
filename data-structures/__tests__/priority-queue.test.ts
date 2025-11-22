import { PriorityQueue } from '../priority-queue';

function createEmptyQueue(): PriorityQueue {
  return new PriorityQueue();
}

function createQueueWithValues(values: number[]): PriorityQueue {
  const queue = new PriorityQueue();
  values.forEach(value => queue.push(value));
  return queue;
}


function popAllFromQueue(queue: PriorityQueue): number[] {
  const results: number[] = [];
  while (queue.size > 0) {
    results.push(queue.pop());
  }
  return results;
}

describe('PriorityQueue', () => {
  describe('constructor', () => {
    it('creates empty queue when instantiated', () => {
      const queue = createEmptyQueue();

      expect(() => queue.peek()).toThrow('Cannot peek from empty priority queue');
    });
  });

  describe('push', () => {
    it('stores element when pushed to empty queue', () => {
      const queue = createEmptyQueue();

      queue.push(5);

      expect(queue.peek()).toBe(5);
    });

    it('maintains minimum at top when multiple elements added', () => {
      const queue = createQueueWithValues([10, 4, 15, 8]);

      expect(queue.peek()).toBe(4);
    });

    it('handles negative numbers correctly', () => {
      const queue = createQueueWithValues([5, -3, 10, -7]);

      expect(queue.peek()).toBe(-7);
    });

    it('handles duplicate values correctly', () => {
      const queue = createQueueWithValues([5, 3, 5, 1, 3]);

      expect(queue.peek()).toBe(1);
      expect(popAllFromQueue(queue)).toEqual([1, 3, 3, 5, 5])
    });

    it('maintains heap order when adding elements in ascending sequence', () => {
      const queue = createEmptyQueue();

      for (let i = 1; i <= 5; i++) {
        queue.push(i);
      }

      expect(queue.peek()).toBe(1);
    });

    it('maintains heap order when adding elements in descending sequence', () => {
      const queue = createEmptyQueue();

      for (let i = 5; i >= 1; i--) {
        queue.push(i);
      }

      expect(queue.peek()).toBe(1);
    });
  });

  describe('pop', () => {
    it('throws error when popping from empty queue', () => {
      const queue = createEmptyQueue();

      expect(() => queue.pop()).toThrow('Cannot pop from empty priority queue');
    });

    it('removes and returns only element from single element queue', () => {
      const queue = createQueueWithValues([42]);

      const result = queue.pop();

      expect(result).toBe(42);
      expect(() => queue.peek()).toThrow('Cannot peek from empty priority queue');
    });

    it('removes and returns minimum element from multi element queue', () => {
      const queue = createQueueWithValues([10, 5, 15]);

      const result = queue.pop();

      expect(result).toBe(5);
      expect(queue.peek()).toBe(10);
    });

    it('maintains heap property after removing minimum', () => {
      const queue = createQueueWithValues([20, 10, 30, 5, 15]);

      queue.pop();

      expect(queue.peek()).toBe(10);
    });

    it('returns elements in sorted order when popping all', () => {
      const queue = createQueueWithValues([20, 10, 30, 5, 15]);

      const results = popAllFromQueue(queue);

      expect(results).toEqual([5, 10, 15, 20, 30]);
    });

    it('throws error when popping from emptied queue', () => {
      const queue = createQueueWithValues([1, 2]);

      queue.pop();
      queue.pop();

      expect(() => queue.pop()).toThrow('Cannot pop from empty priority queue');
    });
  });

  describe('peek', () => {
    it('throws error when peeking empty queue', () => {
      const queue = createEmptyQueue();

      expect(() => queue.peek()).toThrow('Cannot peek from empty priority queue');
    });

    it('returns element without removing from single element queue', () => {
      const queue = createQueueWithValues([42]);

      const result = queue.peek();

      expect(result).toBe(42);
      expect(queue.peek()).toBe(42);
    });

    it('returns minimum without removing from multi element queue', () => {
      const queue = createQueueWithValues([10, 5, 15]);

      const result = queue.peek();

      expect(result).toBe(5);
      expect(queue.pop()).toBe(5);
    });

    it('updates correctly after push operations', () => {
      const queue = createEmptyQueue();

      queue.push(10);
      expect(queue.peek()).toBe(10);

      queue.push(5);
      expect(queue.peek()).toBe(5);

      queue.push(15);
      expect(queue.peek()).toBe(5);

      queue.push(2);
      expect(queue.peek()).toBe(2);
    });

    it('remains consistent after multiple peeks', () => {
      const queue = createQueueWithValues([8, 3, 12]);

      const firstPeek = queue.peek();
      const secondPeek = queue.peek();
      const thirdPeek = queue.peek();

      expect(firstPeek).toBe(3);
      expect(secondPeek).toBe(3);
      expect(thirdPeek).toBe(3);
    });
  });

  describe('mixed operations', () => {
    it('maintains correctness with alternating push and pop', () => {
      const queue = createEmptyQueue();

      queue.push(10);
      queue.push(5);
      expect(queue.pop()).toBe(5);

      queue.push(3);
      expect(queue.pop()).toBe(3);

      expect(queue.pop()).toBe(10);
    });

    it('handles push after complete emptying', () => {
      const queue = createQueueWithValues([1, 2]);

      queue.pop();
      queue.pop();
      queue.push(7);

      expect(queue.peek()).toBe(7);
    });

    it('maintains heap property with complex sequence', () => {
      const queue = createEmptyQueue();

      queue.push(5);
      queue.push(3);
      expect(queue.pop()).toBe(3);
      queue.push(7);
      queue.push(1);
      expect(queue.pop()).toBe(1);
      expect(queue.pop()).toBe(5);
      queue.push(4);
      expect(queue.pop()).toBe(4);

      expect(queue.pop()).toBe(7);
    });

    it('handles duplicate values with mixed operations', () => {
      const queue = createEmptyQueue();

      queue.push(5);
      queue.push(5);
      queue.push(3);
      expect(queue.pop()).toBe(3);
      queue.push(5);
      expect(queue.pop()).toBe(5);
      expect(queue.pop()).toBe(5);

      expect(queue.pop()).toBe(5);
    });

    it('maintains correctness with large sequence of operations', () => {
      const queue = createEmptyQueue();

      for (let i = 20; i >= 1; i--) {
        queue.push(i);
      }

      const results = popAllFromQueue(queue);

      expect(results).toEqual(Array.from({length: 20}, (_, i) => i + 1));
    });
  });
});
