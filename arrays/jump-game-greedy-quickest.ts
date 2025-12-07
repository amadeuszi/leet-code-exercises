
// 1 1 4 0 0 2 0 1 3

// 0 1 1

// 2 0 1 0

// 2 0 2 0 1


function canJump(nums: number[]): boolean {    
    let reached = nums.length - 1

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= reached) {
            reached = i
        }
    }

    return reached === 0
};