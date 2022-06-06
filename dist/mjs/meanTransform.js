import { standardDeviation } from './std';
import { mean } from './mean';
const meanTransform = (sample, refercence) => {
    const stdSample = standardDeviation(sample);
    const stdRefercene = standardDeviation(refercence);
    const a = stdRefercene / stdSample;
    const b = mean(refercence) - a * mean(sample);
    return sample.map(item => item * a + b);
};
export { meanTransform };
