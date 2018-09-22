const getKeyframesSorted = (keyframes) => {
  // Its sorted the keyframes
  return keyframes.sort((a, b) => a.ms - b.ms)
}

export default getKeyframesSorted
