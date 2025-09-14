function convert(inputString: string, numRows: number): string {
    let direction = 1
    let rowIndex = 0

    const zigZag = Array(numRows).fill("")

    if (numRows <= 1) {
        return inputString
    }

    for (let i = 0; i < inputString.length; i++) {
        zigZag[rowIndex] += inputString[i]
        rowIndex += direction;
        if (rowIndex === 0 || rowIndex == numRows - 1) {
            direction *= (-1)
        }
    }

    return zigZag.join("")
}

console.log(convert("PAYPALISHIRING", 3))