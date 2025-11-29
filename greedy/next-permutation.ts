export function nextPermutation(nums: number[]): void {
    let pivot = nums.length - 2
    
    while (nums[pivot] >= nums[pivot + 1]) {
        pivot--
    }

    if (pivot >= 0) {
        let j = nums.length - 1
        while (nums[j] <= nums[pivot]) {
            j--
        }
        [nums[j], nums[pivot]] = [nums[pivot], nums[j]]
    }

    let left = pivot + 1
    let right = nums.length - 1
    
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
};