
// lll -> ll
// lll -> l
// llll -> l
// llll -> ll

// ll -> ll
// l -> l

interface Pair {
    char: string
    count: number
}

function toCounts(s: string): Pair[] {
    const counts: Pair[] = []

    let currentLength = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            currentLength++
            continue
        }
        
        counts.push({
            char: s[i],
            count: currentLength + 1,
        })
        currentLength = 0
    }
    
    return counts
}


function expressiveWords(s: string, words: string[]): number {
    const counts = toCounts(s)
    
    let stretchyCount = 0
    for (const word of words) {
        const wordCount = toCounts(word)
        
        let same = 0
        
        if (wordCount.length !== counts.length) {
            continue
        }
        
        for (let i = 0; i < wordCount.length; i++) {
            const { char, count } = wordCount[i]
            if (char !== counts[i].char) {
                continue
            }
            const originalCount = counts[i].count ?? 0
            if (originalCount >= 3 && originalCount >= count) {
                same++
            } else if (originalCount === count) {
                same++
            }
        }
        if (wordCount.length === same) {
            stretchyCount++
        }
    }

    return stretchyCount
};