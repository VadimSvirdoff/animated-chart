import { formatLabel } from 'src/services/formatLabel';

type ControlTick = (args: {
    currentTickValue: number,
    nextTickValue: number,
    linearCoef: number
}) => string;

export const controlTickValue: ControlTick = ({ currentTickValue, nextTickValue, linearCoef }) => {
    const diff = nextTickValue - currentTickValue;

    return formatLabel(currentTickValue + diff * linearCoef);
};