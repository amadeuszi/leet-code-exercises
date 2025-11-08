
const quickSort = (array: number[]): number[] => {
    const swap = (i: number, j: number) => {
        const tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
    }

    const doQuickSort = (start: number, end: number) => {
        if (start >= end) {
            return
        }
        const randomPivotIndex = start + Math.floor((end - start + 1) * Math.random())
        const pivot = array[randomPivotIndex]
        swap(randomPivotIndex, end)
        let i = start
        let j = end
        while (i < j) {
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j--
            }
            if (i < j) {
                swap(i, j)
                i++
                j--
            }
        }
        doQuickSort(start, j)
        doQuickSort(j + 1, end)
    }
    doQuickSort(0, array.length - 1)
    return array;
}

console.log(quickSort([2, 2, 2]))
console.log(quickSort([1,3, 2, 5, 0, 10]))
console.log(quickSort([3, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([1, 2, 3]))
console.log(quickSort([]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))



