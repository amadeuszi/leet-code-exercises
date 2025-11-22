export const totalFruit = (fruits: number[]): number => {
    const basket = new Map<number, number>()
    let left = 0
    let right = -1
    let max = 0
    const length = fruits.length
    
    while (left < length && right < length && left - 1 <= right) {
        if (basket.size > 2 || right === length - 1) {
            const lFruit = fruits[left]
            const count = basket.get(lFruit) ?? 1
            basket.set(lFruit, count - 1)
            if (count - 1 === 0) {
                basket.delete(lFruit)
            }
            left++
        } else {
            right++
            const rFruit = fruits[right]
            const count = basket.get(rFruit) ?? 0
            basket.set(rFruit, count + 1)
        }
        if (basket.size <= 2) {
            max = Math.max(max, right - left + 1)
        }
    }
    return max
}
