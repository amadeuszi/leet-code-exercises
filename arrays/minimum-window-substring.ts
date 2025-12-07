// ababaaca abc
// output: baac

function minWindow(s: string, t: string): string {
    const tCounts = new Map<string, number>()
    const counts = new Map<string, number>()
    let matchingChars = 0
    let minLength = Infinity
    let minLeft = -1
    let minRight = -1
    
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        const count = (tCounts.get(char) ?? 0) + 1
        tCounts.set(char, count)
    }
    
    let left = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (!tCounts.has(char)) {
            continue
        }

        const count = (counts.get(char) ?? 0) + 1
        counts.set(char, count)
        if (count === tCounts.get(char)) {
            matchingChars++
        }
        
        while (matchingChars >= tCounts.size) {
            const length = i - left + 1
            if (length < minLength) {
                minLeft = left
                minRight = i
                minLength = length
            }
            const c = s[left]
            if (!counts.get(c)) {
                continue
            }
            const howMany = counts.get(c) - 1
            if (howMany === 0) {
                counts.delete(c)
            } else {
                counts.set(c, howMany)
            }
            
            if (howMany < tCounts.get(c)) {
                matchingChars--
            }
        }
    }
    
    if (minLeft === -1) {
        return ""
    }
    
    return s.substring(minLeft, minRight + 1)
};