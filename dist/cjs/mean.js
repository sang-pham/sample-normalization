"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = void 0;
const mean = (data) => {
    return data.reduce((res, item) => res + item, 0) / data.length;
};
exports.mean = mean;
