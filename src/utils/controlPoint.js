export const controlPointX = ({ finishX, multiplier, pointIntervalFinalValue }) => {
    const liniarCoef = multiplier / pointIntervalFinalValue;
    return finishX * liniarCoef
};

export const controlPointY = ({ startY, middleY, multiplier, pointIntervalFinalValue }) => {
    const liniarCoef = multiplier / pointIntervalFinalValue;
    const diff = startY - middleY;
    const coef = diff * liniarCoef;
    return startY - coef;
};

export const controlPointYReverse = ({ finishY, middleY, multiplier, pointIntervalFinalValue }) => {
    const liniarCoef = multiplier / pointIntervalFinalValue;
    const diff = finishY - middleY;
    const coef = diff * liniarCoef;
    return middleY + coef;
};
