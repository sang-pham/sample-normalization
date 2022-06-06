import { standardDeviation } from './src/std.js'
import { percentile } from './src/percentile.js'
import { percentileTransfrom } from './src/percentileTransform.js'
import { meanTransform } from './src/meanTransform.js'

const reference = [22, 87, 5, 43, 56,
  73, 55, 54, 11,
  20, 51, 5, 79, 31,
  27]

const sample = [69, 117, 185,  64, 113,  87,  49, 156, 170,  39,  86, 159,  48,
  17,  58]

// console.log(standardDeviation(reference))

console.log(percentileTransfrom(sample, reference))