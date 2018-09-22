import getCurrentKeyframe from './getCurrentKeyframe'

const getCurrentKeyframes = (keyframesRoot, ms) => {
  const keys = Object.keys(keyframesRoot)
  let currentKeyframes = {}
  keys.forEach(k => {
    currentKeyframes[k] = getCurrentKeyframe(keyframesRoot[k], ms)
  })

  return currentKeyframes
}

export default getCurrentKeyframes
