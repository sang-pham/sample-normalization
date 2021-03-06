const variance = (data) => {

  const n = data.length
  const mean = data.reduce((res, item) => res + item, 0) / n

  const variance = data.reduce((res, item) => {
    return res + (item - mean) * (item - mean)
  }, 0) / n
  return variance 
}

const standardDeviation = (data) => {
  return Math.sqrt(variance(data))
}

export {standardDeviation}