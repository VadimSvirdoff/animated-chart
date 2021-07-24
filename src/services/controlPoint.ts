type ControlPointX = (arg: {
    finishX: number,
    multiplier: number,
    pointIntervalFinalValue: number
}) => number

type ControlPointY = (arg: {
    startY: number,
    middleY: number,
    multiplier: number,
    pointIntervalFinalValue: number
}) => number

export const controlPointX: ControlPointX = ({ finishX, multiplier, pointIntervalFinalValue }) => {
    const liniarCoef = multiplier / pointIntervalFinalValue;
    return finishX * liniarCoef
};

export const controlPointY: ControlPointY = ({ startY, middleY, multiplier, pointIntervalFinalValue }) => {
    const liniarCoef = multiplier / pointIntervalFinalValue;
    const diff = startY - middleY;
    const coef = diff * liniarCoef;
    return startY - coef;
};

