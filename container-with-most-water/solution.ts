function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right])
        const currentArea = (right - left) * currentHeight
        maxArea = Math.max(maxArea, currentArea)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea;
};

