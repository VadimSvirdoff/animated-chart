import { DIFF } from "../components/chart/constants";
// TODO: CONTROLS LINES AND LABELS POSITION 

export const controlPosition = (position, linearCoef) => {
    const coef = DIFF * linearCoef;
    return position + coef;
}
