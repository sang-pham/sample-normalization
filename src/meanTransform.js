import { onePointTransform } from './onePointTransform.js'

const meanTransform = (sample, refercence, mode = '') => {
  return onePointTransform(sample, refercence, 50, mode)
}

export { meanTransform }