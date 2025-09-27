function longestCommonPrefix(strs: string[]): string {
    for (let i = 0; i < strs[0].length; i++) {
        const charsAtIndex = strs.map(str => str[i])
        const uniqueChars = new Set(charsAtIndex)
        if (uniqueChars.size !== 1) {
            return strs[0].substring(0, i)
        }
    }

    return strs[0]    
};


longestCommonPrefix(["abb", "abc"])