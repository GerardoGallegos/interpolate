/* globals test, expect */
import getKeyframesSorted from '../src/interpolate/getKeyframesSorted'
import getCurrentKeyframe from '../src/interpolate/getCurrentKeyframe'
import getCurrentKeyframes from '../src/interpolate/getCurrentKeyframes'
import normalizeKeyframesTime from '../src/interpolate/normalizeKeyframesTime'

test('Expect sorted keyframes', () => {
  const keyframes = [
    { ms: 6000, value: 'Hey, how' },
    { ms: 13000, value: 'Hey, how are you?' },
    { ms: 3000, value: 'Hey' },
    { ms: 10000, value: 'Hey, how are' }
  ]

  expect(getKeyframesSorted(keyframes)[0])
    .toEqual({ ms: 3000, value: 'Hey' })

  expect(getKeyframesSorted(keyframes)[3])
    .toEqual({ ms: 13000, value: 'Hey, how are you?' })
})

test('Get the current keyframe', () => {
  const keyframes = [
    { ms: 3, value: 'Hey' },
    { ms: 6, value: 'Hey, how' },
    { ms: 13, value: 'Hey, how are you?' },
    { ms: 10, value: 'Hey, how are' }
  ]

  let ms = 4
  expect(getCurrentKeyframe(keyframes, ms))
    .toEqual({ ms: 3, value: 'Hey' })

  ms = 6
  expect(getCurrentKeyframe(keyframes, ms))
    .toEqual({ ms: 6, value: 'Hey, how' })

  ms = 7
  expect(getCurrentKeyframe(keyframes, ms))
    .toEqual({ ms: 6, value: 'Hey, how' })

  ms = 10
  expect(getCurrentKeyframe(keyframes, ms))
    .toEqual({ ms: 10, value: 'Hey, how are' })
})

test('Get the current keyframes', () => {
  const keyframesRoot = {
    text: [
      { ms: 3000, value: 'Hey' },
      { ms: 6000, value: 'Hey, how' },
      { ms: 10000, value: 'Hey, how are' },
      { ms: 13000, value: 'Hey, how are you?' }
    ],

    nums: [
      { ms: 1000, value: 200 },
      { ms: 7000, value: 100 },
      { ms: 13000, value: 20 },
      { ms: 18000, value: 500 }
    ]
  }

  let ms = 5000
  expect(getCurrentKeyframes(keyframesRoot, ms)).toEqual({
    text: { ms: 3000, value: 'Hey' },
    nums: { ms: 1000, value: 200 }
  })

  ms = 8000
  expect(getCurrentKeyframes(keyframesRoot, ms)).toEqual({
    text: { ms: 6000, value: 'Hey, how' },
    nums: { ms: 7000, value: 100 }
  })

  ms = 9000
  expect(getCurrentKeyframes(keyframesRoot, ms))
    .toEqual({
      text: { ms: 6000, value: 'Hey, how' },
      nums: { ms: 7000, value: 100 }
    })
})

test('Should be normalizated keyframes in millisecods', () => {
  const keyframesRoot = {
    text: [
      { s: 13, value: 'Hey, how are you?' },
      { s: 6, value: 'Hey, how' },
      { ms: 3000, value: 'Hey' },
      { s: 10, value: 'Hey, how are' }
    ],

    nums: [
      { ms: 1000, value: 200 },
      { s: 7, value: 100 },
      { ms: 13000, value: 20 },
      { s: 18, value: 500 }
    ]
  }
  expect(normalizeKeyframesTime(keyframesRoot.text)[0])
    .toEqual({ s: 13, value: 'Hey, how are you?', ms: 13000 })

  expect(normalizeKeyframesTime(keyframesRoot.text)[1])
    .toEqual({ s: 6, value: 'Hey, how', ms: 6000 })

  expect(normalizeKeyframesTime(keyframesRoot.text)[2])
    .toEqual({ ms: 3000, value: 'Hey' })

  expect(normalizeKeyframesTime(keyframesRoot.nums)[1])
    .toEqual({ s: 7, value: 100, ms: 7000 })
})
