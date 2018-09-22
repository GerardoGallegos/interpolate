
const getCurrentKeyframe = (keyframes, ms) => {
  let current = null

  // Localize the current keyframe
  for (let i = 0; i < keyframes.length; i++) {
    if (keyframes[i].ms <= ms) {
      current = keyframes[i]
    }
  }

  return current
}

export default getCurrentKeyframe
