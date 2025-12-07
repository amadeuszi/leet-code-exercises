export function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1
    let j = t.length - 1

    while (i >= 0 || j >= 0) {
        let back = 0
        while (back > 0 || s[i] === "#") {
            if (s[i] === "#") {
                back++
            } else {
                back--
            }
            i--
        }
        back = 0
        while (back > 0 || t[j] === "#") {
            if (t[j] === "#") {
                back++
            } else {
                back--
            }
            j--
        }
        if (s[i] !== t[j]) {
            return false
        }
        i--
        j--
    }
    return true
};