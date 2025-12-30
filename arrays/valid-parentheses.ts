function isValid(s: string): boolean {
    const stack = []
    const matching = new Map<string, string>([
        ["}", "{"],
        [")", "("],
        ["]", "["],
    ])
    const opening = new Set(["(", "{", "["])

    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (opening.has(current)) {
            stack.push(current)
        } else {
            const match = matching.get(current)
            if (match !== stack[stack.length - 1]) {
                return false
            }
            stack.length = stack.length - 1
        }
    }

    return stack.length === 0
};