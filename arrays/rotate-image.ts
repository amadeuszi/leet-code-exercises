// 1 2 3    5 3 1
// 3 2 1    6 2 2
// 5 6 7    7 1 3


// 1 3 5    5 3 1
// 2 2 6 -> 6 2 2
// 3 1 7    3 1 7


/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const length = matrix.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length / 2); j++) {
            [matrix[i][j], matrix[i][length - 1 - j]] = [matrix[i][length - 1 - j], matrix[i][j]]
        }
    }
};