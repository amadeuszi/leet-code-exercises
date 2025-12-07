
// 1 1 4 0 0 2 0 1 3

// 0 1 1

// 2 0 1 0

// 2 0 2 0 1


function canJump(nums: number[]): boolean {
    
    const isReached = new Array(nums.length).fill(false)
    isReached[nums.length - 1] = true
    
    for (let i = nums.length - 2; i >= 0; i--) {
        const max = nums[i]
        for (let j = max; j > 0; j--) {
            if (isReached[j + i]) {
                isReached[i] = true
                break
            }
        }
    }
    return isReached[0]
};