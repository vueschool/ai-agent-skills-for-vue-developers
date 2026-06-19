type TimeOfDayPeriod =
  | 'late night'
  | 'early morning'
  | 'morning'
  | 'afternoon'
  | 'evening'
  | 'night'

interface TimeOfDayResult {
  period: TimeOfDayPeriod
  greeting: string
  hour: number
  localTime: string
}

function getTimeOfDay(hour: number): TimeOfDayPeriod {
  if (hour >= 0 && hour < 5) return 'late night'
  if (hour >= 5 && hour < 9) return 'early morning'
  if (hour >= 9 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 17) return 'afternoon'
  if (hour >= 17 && hour < 21) return 'evening'
  return 'night'
}

function greetingForPeriod(period: TimeOfDayPeriod): string {
  switch (period) {
    case 'late night':
    case 'night':
      return 'Good evening'
    case 'early morning':
      return 'Good morning'
    case 'morning':
      return 'Good morning'
    case 'afternoon':
      return 'Good afternoon'
    case 'evening':
      return 'Good evening'
  }
}

function formatLocalTime(date: Date): string {
  return date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

export function resolveTimeOfDay(date = new Date()): TimeOfDayResult {
  const hour = date.getHours()
  const period = getTimeOfDay(hour)

  return {
    period,
    greeting: greetingForPeriod(period),
    hour,
    localTime: formatLocalTime(date),
  }
}

console.log(JSON.stringify(resolveTimeOfDay(), null, 2))
