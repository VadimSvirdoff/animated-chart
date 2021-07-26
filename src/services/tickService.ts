import { formatLabel } from 'src/services';
import { isEqual } from 'lodash';

type ControlTick = (args: {
    currentTickValue: number,
    nextTickValue: number,
    linearCoef: number
}) => string;

type Stage = number;

export type Tick = {
    initialTick: number,
    firstTick: number,
    secondTick: number,
    thirdTick: number
}

type GetCurrentStageIndex = (stages: Stage[], multiplier: number) => number;
type IsTicksEqual = (currentTicks: Tick, ticks: Tick) => boolean;
type SelectTicks = (index: number,  initialTicks: Tick, stages: Stage[]) => Tick;

export const controlTickValue: ControlTick = ({ currentTickValue, nextTickValue, linearCoef }) => {
    const diff = nextTickValue - currentTickValue;

    return formatLabel(currentTickValue + diff * linearCoef);
};

export const getCurrentStageIndex: GetCurrentStageIndex = (stages, multiplier) => {

    return (
    stages.findIndex((_, id) => {
        const first = stages[id + 1]
        const last = stages[id + 2]
        const index = first + (last - first) / 2;
        return index > multiplier
    })
)};

export const isTicksEqual: IsTicksEqual = (currentTicks, ticks) => (isEqual(currentTicks, ticks));

export const selectTicks: SelectTicks = (index, initialTicks, stages) => {
    const isInitialTicks = index === 0;

    return isInitialTicks
        ? initialTicks
        : {
            initialTick: stages[index + 3],
            firstTick: stages[index + 2],
            secondTick: stages[index + 1],
            thirdTick: stages[index],
        }
}