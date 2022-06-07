import { standardDeviation } from './std.js'
import { percentile } from './percentile.js'

const onePointTransform = (sample, refercene, percent = 50, mode = '') => {
  const stdSample = standardDeviation(sample)
  const stdReference = standardDeviation(refercene)
  const samplePercentile = percentile(sample, percent)
  const referencePercentile = percentile(refercene, percent)

  switch(mode) {
    case 'shift':
      return sample.map(item => item + referencePercentile - samplePercentile)
    case 'scale':
      return sample.map(item => item * stdReference / stdSample)
    default: 
      a = stdReference / stdSample
      b = referencePercentile - a * samplePercentile
      return sample.map(item => a * item + b)
  }
}

export { onePointTransform }