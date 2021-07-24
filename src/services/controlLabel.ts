import { formatLabel } from 'src/services/formatLabel';

type ControlLabel = (args: {
    currentTickValue: number,
    nextTickValue: number,
    linearCoef: number
}) => string;

export const controlLabel: ControlLabel = ({ currentTickValue, nextTickValue, linearCoef }) => {
    const diff = nextTickValue - currentTickValue;

    return formatLabel(currentTickValue + diff * linearCoef);
};
