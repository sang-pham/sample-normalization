"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percentileTransfrom = void 0;
const percentile_1 = require("./percentile");
const percentileTransfrom = (sample, reference, lowPercentile = 5, highPercentile = 95) => {
    const lX = (0, percentile_1.percentile)(sample, lowPercentile);
    const uX = (0, percentile_1.percentile)(sample, highPercentile);
    const lY = (0, percentile_1.percentile)(reference, lowPercentile);
    const uY = (0, percentile_1.percentile)(reference, highPercentile);
    return sample.map(x => {
        return lY + (uY - lY) * (x - lX) / (uX - lX);
    });
};
exports.percentileTransfrom = percentileTransfrom;
