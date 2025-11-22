function lengthOfLongestSubstring(s: string): number {
    const basket = new Set<string>()
    let max = 0
    let left = 0

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        while (basket.has(char) && left < i) {
            const lChar = s[left]
            basket.delete(lChar)
            left++
        }
        basket.add(char)
        max = Math.max(max, basket.size)    
    }
    return max
};
         
         
         