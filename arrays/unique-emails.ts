const toBaseEmail = (email: string): string => {
    const [local, domain] = email.split('@')
    const plusIndex = local.indexOf('+')
    const baseLocal = local.substring(0, plusIndex === -1 ? Infinity: plusIndex).replaceAll('.', '')
    return baseLocal + '@' + domain
}

const numUniqueEmails = (emails: string[]): number => {
    const set = new Set(emails.map(toBaseEmail))
    return set.size
}
