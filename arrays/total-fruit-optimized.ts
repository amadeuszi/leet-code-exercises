export const totalFruit = (fruits: number[]): number => {
    const basket = new Map<number, number>()
    let left = 0
    let max = 0
    const length = fruits.length

    for (let right = 0; right < length; right++) {
        const rFruit = fruits[right]
        basket.set(rFruit, (basket.get(rFruit) ?? 0) + 1)

        while (basket.size > 2) {
            const lFruit = fruits[left++]
            const count = (basket.get(lFruit) ?? 0) - 1
            basket.set(lFruit, count)
            if (count === 0) {
                basket.delete(lFruit)
            }
        }
        max = Math.max(max, right - left + 1)
    }
    return max
}
