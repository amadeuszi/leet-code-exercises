
const licenseKeyFormatting = (s: string, k: number): string => {
    const clean = s.replaceAll('-', '').split('').reverse()
    const final = []
    for (let i = 0; i < clean.length; i++) {
        final.push(clean[i].toUpperCase())
        if (i % k === k - 1) {
            final.push('-')
        }
    }
    if (final[final.length - 1] === '-') {
        final.pop()
    }
    return final.reverse().join('')
}
