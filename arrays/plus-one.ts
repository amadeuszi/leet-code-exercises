// 1 2 3
// output: 1 2 4

// 2 3 8
// output: 2 3 9

// 2 3 9
// output: 2 4 0

// 1 9 9 9
// output: 2 0 0 0

// 9 9 9
// output: 1 0 0 0

function plusOne(digits: number[]): number[] {
    const result = []
    
    let carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        const current = digits[i] + carry
        result.push(current % 10)
        carry = current > 9 ? 1 : 0
    }
    
    if (carry === 1) {
        result.push(1)
    }
    result.reverse()
    
    return result
};
