const mean = (data) => {
  return data.reduce((res, item) => res + item, 0) / data.length
}

export {mean}