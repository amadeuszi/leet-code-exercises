
function toString(time: number): string {
  const hour = Math.floor(time / 60)
  const minute = time % 60
  return hour + ":" + minute
}

function toDigits(time: number): string[] {
  const timeString = toString(time)
  return timeString.replace(":", "").split("")
}

export function nextClosestTime(time: string): string {
  const digits = new Set(time.replace(":", "").split(""))

  const [hour, minute] = time.split(":")
  const now = Number(hour) * 60 + Number(minute)

  const fullDay = 24 * 60
  for (let i = 1; i < fullDay; i++) {
    const current = now + i
    if (toDigits(current).every(d => digits.has(d))) {
      return toString(current)
    }
  }
  
  return ""
}