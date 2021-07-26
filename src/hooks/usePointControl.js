import { useState, useEffect } from 'react';
import {
    controlPointX,
    controlPointY,
} from '../services';
import {
    START_POINT_X,
    FINISH_POINT_X,
    FIRST_POINT_STAGE,
    START_POINT_Y,
    SECOND_POINT_STAGE,
    MIDDLE_POINT_Y,
    FINISH_SCREEN_Y,
    FINISH_SCREEN_X,
    FINAL_SCREEN_STAGE,
    POINT_INTERVAL_FINAL_VALUE
} from '../constants';
import { formatLabel, convertToPercents } from 'src/services';

export const usePointControl = ({ multiplier }) => {
    const [stage, setStage] = useState('');

    useEffect(() => {
        if (multiplier < POINT_INTERVAL_FINAL_VALUE) {
            setStage(FIRST_POINT_STAGE);
        }
    }, []);

    useEffect(() => {
        if (multiplier >= POINT_INTERVAL_FINAL_VALUE) {
            setStage(SECOND_POINT_STAGE);
        }
    }, [multiplier]);

    const isSecondStage = () => SECOND_POINT_STAGE === stage;
    const isFinalScreenStage = () => FINAL_SCREEN_STAGE === stage;
    const setFinalScreenStage = () => setStage(FINAL_SCREEN_STAGE);

    const controlPointStages = () => {
        switch (stage) {
            case FIRST_POINT_STAGE:
                return {
                    x: controlPointX({
                        finishX: FINISH_POINT_X,
                        multiplier,
                        pointIntervalFinalValue: POINT_INTERVAL_FINAL_VALUE
                    }),
                    y: controlPointY({
                        startY: START_POINT_Y,
                        middleY: MIDDLE_POINT_Y,
                        pointIntervalFinalValue: POINT_INTERVAL_FINAL_VALUE,
                        multiplier
                    }),
                    value: formatLabel(multiplier)
                }
            case SECOND_POINT_STAGE:
                return {
                    x: controlPointX({
                        finishX: FINISH_POINT_X,
                        multiplier: POINT_INTERVAL_FINAL_VALUE,
                        pointIntervalFinalValue: POINT_INTERVAL_FINAL_VALUE
                    }),
                    y: controlPointY({
                        startY: START_POINT_Y,
                        middleY: MIDDLE_POINT_Y,
                        pointIntervalFinalValue: POINT_INTERVAL_FINAL_VALUE,
                        multiplier: POINT_INTERVAL_FINAL_VALUE
                    }),
                    value: formatLabel(multiplier)
                }
            case FINAL_SCREEN_STAGE:
                return {
                    x: convertToPercents(FINISH_SCREEN_X),
                    y: convertToPercents(FINISH_SCREEN_Y),
                    value: formatLabel(multiplier)
                }
            default:
                return {
                    x: START_POINT_X,
                    y: START_POINT_Y
                }
        }
    };

    const point = controlPointStages();

    return { point, stage : {isSecondStage, isFinalScreenStage, setFinalScreenStage}};
}
