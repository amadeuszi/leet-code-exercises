//Examples:

// 1 1 4 0 0 2 0 1 3
// output: true

// 0 1 1
// output: false

// 2 0 1 0
// output: true

// 2 0 2 0 1
// output: true

// 2 1 0 2 3 1
// output: false

function canJump(nums: number[]): boolean {
    
    const isReached = new Array(nums.length).fill(false)
    isReached[nums.length - 1] = true
    
    const canReach = (i: number): boolean => {
        if (isReached[i]) {
            return true
        }
        const maxJump = nums[i]
        for (let j = maxJump; j > 0; j--) {
            if (canReach(i + j)) {
                isReached[i] = true
                return true
            }
        }
        return false
    }
    
    return canReach(0)
};