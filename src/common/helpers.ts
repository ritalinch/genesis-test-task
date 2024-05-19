export const now = () => Math.floor(Date.now() / 1000)

export const DAY_IN_SECONDS = 24 * 60 * 60

export const getTodayMidnight = () => {
  const secInDay = 24 * 60 * 60
  const nowTime = now()
  return nowTime - (nowTime % secInDay)
}
