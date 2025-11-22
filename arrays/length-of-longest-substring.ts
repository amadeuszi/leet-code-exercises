function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    const visitedSet = new Set<string>()

    let left = 0
    let right = 0
    
    while (left <= right && right < s.length) {
        const potentialAdd = s[right]
        if (visitedSet.has(potentialAdd)) {
            visitedSet.delete(s[left])
            left++
        } else {
            visitedSet.add(potentialAdd)
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        }
    }

    return maxLength
}