const multiplication = (array1: string[], array2: string[]): string[] => {
    const result = []
    for (const item1 of array1) {
        for (const item2 of array2) {
            result.push(item1 + item2)
        }
    }
    return result
}

const numbersToLetters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
}

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return []
    }

    let multiplied = [""]

    for (let i = 0; i < digits.length; i++) {
        const currentDigit = digits[i]
        const currentNumbers = numbersToLetters[currentDigit]
        multiplied = multiplication(multiplied, currentNumbers)
    }

    return multiplied
};