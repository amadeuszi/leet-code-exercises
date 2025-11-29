function threeSum(nums: number[]): number[][] {
    const length = nums.length
    const result: number[][] = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < length; i++) {
        if (nums[i - 1] === nums[i]) {
            continue
        }
        const seen = new Set<number>()
        for (let j = i + 1; j < length; j++) {
            const complement = -(nums[i] + nums[j])
            if (seen.has(complement)) {
                result.push([nums[i], complement, nums[j]])
                while (nums[j] === nums[j + 1]) {
                    j++
                }
            }
            seen.add(nums[j])
        }
    }
    
    return result
};