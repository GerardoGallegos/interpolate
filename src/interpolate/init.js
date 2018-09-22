import normalizeKeyframesTime from './normalizeKeyframesTime'
import getKeyframesSorted from './getKeyframesSorted'

const init = (keyframes, time) => {
  if (!keyframes[0].s || keyframes[0].ms) {
    throw new Error('Time in keyframes should be: s or ms')
  }

  if (typeof time !== 'number') {
    throw new Error('time should be a number')
  }

  const keys = Object.keys(keyframes)
  let out = {}

  keys.forEach(k => {
    const normalized = normalizeKeyframesTime(keyframes[k])
    out[k] = getKeyframesSorted(normalized)
  })

  return out
}

export default init
