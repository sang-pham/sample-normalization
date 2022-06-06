"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meanTransform = void 0;
const std_1 = require("./std");
const mean_1 = require("./mean");
const meanTransform = (sample, refercence) => {
    const stdSample = (0, std_1.standardDeviation)(sample);
    const stdRefercene = (0, std_1.standardDeviation)(refercence);
    const a = stdRefercene / stdSample;
    const b = (0, mean_1.mean)(refercence) - a * (0, mean_1.mean)(sample);
    return sample.map(item => item * a + b);
};
exports.meanTransform = meanTransform;
