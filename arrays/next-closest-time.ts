function generateAllPossible(digits: string[]): string[][] {
  const result: string[][] = []


  function backtrack(current: string[]) {
    if (current.length === 4) {
      result.push([...current])
      return
    }

    for (const digit of digits) {
      current.push(digit)
      backtrack(current)
      current.pop()
    }
  }

  backtrack([])

  return result.map(([hour1, hour2, minute1, minute2]) =>
    [hour1 + hour2, minute1 + minute2]
  )
}


function validate([hour, minute]: string[]): boolean {
  const isHourOk = Number(hour) < 24
  const isMinuteOk = Number(minute) < 60

  return isHourOk && isMinuteOk
}

function distance(time1: string[], time2: string[]) {
  const [hour1, minute1] = time1
  const [hour2, minute2] = time2

  const t1 = (60 * Number(hour1) + Number(minute1))
  const t2 = (60 * Number(hour2) + Number(minute2))

  const fullDay = 24 * 60

  if (t1 === t2) {
    return fullDay
  }

  return (fullDay + t1 - t2) % fullDay
}

export function nextClosestTime(time: string): string {
  const digits = time.replaceAll(":", "").split("")
  const all = generateAllPossible(digits).filter(validate)

  let best = ""
  let bestDistance = Infinity
  const time1 = time.split(":")

  for (const time2 of all) {
    let d = distance(time2, time1)
    if (d < bestDistance) {
      bestDistance = d
      best = time2.join(":")
    }
  }

  return best
};