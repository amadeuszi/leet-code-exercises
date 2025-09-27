function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    let bestSum = Infinity
    let bestDifference = Infinity
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = current + nums[left] + nums[right]
            const difference = sum - target
            if (difference >= 0) {
                right--
            } else {
                left++
            }
            if (bestDifference > Math.abs(difference)) {
                bestDifference = Math.abs(difference)
                bestSum = sum
            }
        }
    }

    return bestSum
};