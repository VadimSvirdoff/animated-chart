import { round } from "./round";
import { tickFormat } from 'src/utils/formatString';

// TODO: CONTROLS LABELS VALUE 

export const controlLabel = (tick, nextTick, linearCoef) => {
    const diff = nextTick - tick;

    return tickFormat(round(tick + diff * linearCoef))
};
