const getPrevKeyframe = (keyframes, ms) => {
  let prev = {}

  keyframes.forEach((k, i) => {
    if (k[0] < ms) {
      prev = k
    }
  })
  return prev
}

export default getPrevKeyframe
