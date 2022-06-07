import { standardDeviation } from './src/std.js'
import { percentile } from './src/percentile.js'
import { percentileTransfrom } from './src/percentileTransform.js'
import { meanTransform } from './src/meanTransform.js'
import { onePointTransform } from './src/onePointTransform.js'
import { mean } from './src/mean.js'

const reference = [22, 87, 5, 43, 56,
  73, 55, 54, 11,
  20, 51, 5, 79, 31,
  27]

const sample = [100,  90,  96,  62, 118,  34,  43,  78,  62,  74,  11, 173, 127,
  25,   1]

// console.log(standardDeviation(reference))

// console.log(standardDeviation(onePointTransform(sample, reference, 50, 'shift')))

console.log(meanTransform(sample, reference, 'shift'))