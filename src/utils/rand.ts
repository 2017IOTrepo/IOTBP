
/**
 * 线性同余
 * */
export const randomBetween = (min: number, max: number) => {
  let seed = new Date().getTime()
  max = max || 1
  min = min || 0
  seed = (seed * 9301 + 49297) % 233280
  const rnd = seed / 233280.0
  return min + rnd * (max - min)
}

export const randomBoolean = () => {
  return Boolean(Math.round(Math.random()))
}
