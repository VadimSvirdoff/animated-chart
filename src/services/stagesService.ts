export const createStages = () => {
    let stageItem = 1;
    const stagesList = [stageItem];
    let isContinue = true;
    let step = 1;
    let switchStepDiff = 10;
    const finalItem = 1100;

    const controlStep = () => {
        const isChangeStep = stagesList[stagesList.length - 1] >= switchStepDiff

        if (isChangeStep) {
            step +=  1;
            switchStepDiff +=  10
        }
    }

    while (isContinue) {
        controlStep();
            stageItem += step;
        stagesList.push(stageItem);

        if (stageItem > finalItem) {
            isContinue = false
        };
    }

    return stagesList;
}
