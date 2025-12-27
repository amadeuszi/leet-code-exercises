import { calcEquation } from '../evaluate-division';

describe('calcEquation', () => {
  test('should return correct results for basic division chain', () => {
    const equations = [["a", "b"], ["b", "c"]];
    const values = [2.0, 3.0];
    const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
  });

  test('should return correct results for single equation', () => {
    const equations = [["a", "b"]];
    const values = [0.5];
    const queries = [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([0.5, 2.0, -1.0, -1.0]);
  });

  test('should return 1 for self division', () => {
    const equations = [["a", "b"]];
    const values = [2.0];
    const queries = [["a", "a"], ["b", "b"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([1.0, 1.0]);
  });

  test('should return -1 for unknown variables', () => {
    const equations = [["a", "b"]];
    const values = [2.0];
    const queries = [["x", "y"], ["a", "x"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([-1.0, -1.0]);
  });

  test('should handle complex graph with multiple paths', () => {
    const equations = [["a", "b"], ["b", "c"], ["c", "d"]];
    const values = [2.0, 3.0, 4.0];
    const queries = [["a", "d"], ["d", "a"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([24.0, 1 / 24]);
  });

  test('should handle disconnected graph components', () => {
    const equations = [["a", "b"], ["c", "d"]];
    const values = [2.0, 3.0];
    const queries = [["a", "c"], ["b", "d"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([-1.0, -1.0]);
  });

  test('should handle empty equations', () => {
    const equations: string[][] = [];
    const values: number[] = [];
    const queries = [["a", "b"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([-1.0]);
  });

  test('should handle reverse queries correctly', () => {
    const equations = [["a", "b"], ["b", "c"]];
    const values = [2.0, 3.0];
    const queries = [["c", "a"], ["c", "b"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([1 / 6, 1 / 3]);
  });

  test('should handle triangular graph', () => {
    const equations = [["a", "b"], ["b", "c"], ["a", "c"]];
    const values = [2.0, 3.0, 6.0];
    const queries = [["a", "c"], ["c", "a"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([6.0, 1 / 6]);
  });

  test('should handle fractional values', () => {
    const equations = [["a", "b"]];
    const values = [0.5];
    const queries = [["a", "b"], ["b", "a"]];

    const result = calcEquation(equations, values, queries);

    expect(result).toEqual([0.5, 2.0]);
  });
});
