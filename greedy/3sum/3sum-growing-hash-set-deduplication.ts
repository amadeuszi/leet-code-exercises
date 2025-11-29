function threeSum(nums: number[]): number[][] {
    const length = nums.length
    const result: Set<string> = new Set()
    nums.sort((a, b) => a - b)

    for (let i = 0; i < length; i++) {
        if (nums[i - 1] === nums[i]) {
            continue
        }
        const seen = new Set<number>()
        for (let j = i + 1; j < length; j++) {
            const complement = -(nums[i] + nums[j])
            if (seen.has(complement)) {
                result.add(
                    JSON.stringify(
                        [nums[i], complement, nums[j]].toSorted((a, b) => a - b)
                    ) as unknown as string
                )
            }
            seen.add(nums[j])
        }
    }
    
    return Array.from(result.values()).map((v) => JSON.parse(v) as number[])
};