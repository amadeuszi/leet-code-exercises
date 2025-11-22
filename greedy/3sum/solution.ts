function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const result = new Map<string, number[]>()

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = current + nums[left] + nums[right]
            if (sum === 0) {
                const found = [current, nums[left], nums[right]]
                result.set(found.join(""), found)
                left++
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return Array.from(result.values())
};