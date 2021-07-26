type Stage = number;

type ControlLinearCoef = (index: number, stages: Stage[], multiplier: number) => number;

export const controlLinearCoef: ControlLinearCoef = (index, stages, multiplier) => {
    const second = stages[index + 1];
    const third = stages[index + 2];
    const diff = third - second;
    const currentDiff = (diff - (third - multiplier - .5)) / diff;
    return currentDiff
}