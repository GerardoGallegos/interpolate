import init from './init'

const interpolate = (_keyframes, time) => {
  // Keyframes will be normalized, sorted
  // and the input parameters are checked
  const keyframes = init(_keyframes, time)

  console.log(keyframes)
}

export default interpolate
