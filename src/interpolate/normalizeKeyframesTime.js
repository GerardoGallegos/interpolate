const normalizeKeyframesTime = (keyframes) =>
  keyframes.map(k => {
    if (k.s) k.ms = k.s * 1000

    return k
  })

export default normalizeKeyframesTime
