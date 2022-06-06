import { percentile } from './percentile.js'

const percentileTransfrom = (sample, reference, lowPercentile = 5, highPercentile = 95) => {
  const lX = percentile(sample, lowPercentile)
  const uX = percentile(sample, highPercentile)
  const lY = percentile(reference, lowPercentile)
  const uY = percentile(reference, highPercentile)

  return sample.map(x => {
    return lY+(uY-lY)*(x-lX)/(uX-lX)
  })
}

export { percentileTransfrom }