function removeElement(nums: number[], val: number): number {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        if (nums[left] !== val) {
            left++
            continue
        }
        if (nums[right] === val) {
            right--
            continue
        }
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
    }
    return left + 1
};

removeElement([2], 3)