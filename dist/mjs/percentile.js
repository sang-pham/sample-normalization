const percentile = (data, percent) => {
    const sortedArr = [...data];
    sortedArr.sort((a, b) => a - b);
    const index = (percent / 100) * (sortedArr.length - 1);
    const frac = index - Math.floor(index);
    const intPart = Math.floor(index);
    let res = sortedArr[intPart];
    res += frac > 0 ? (frac * (sortedArr[intPart + 1] - sortedArr[intPart])) : 0;
    return res;
};
export { percentile };
