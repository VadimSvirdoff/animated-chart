import {
    controlPointX,
    controlPointY,
} from '../services';
import {
    START_POINT_X,
    FINISH_POINT_X,
    FIRST_POINT_PHASE,
    START_POINT_Y,
    SECOND_POINT_PHASE,
    MIDDLE_POINT_Y,
    FINISH_SCREEN_Y,
    FINISH_SCREEN_X,
    FINAL_SCREEN_PHASE,
    POINT_INTERVAL_FINAL_VALUE
} from '../constants';
import {
    formatLabel,
} from 'src/services';
  
type ControlPointStages = (phase: string, multiplier: number) => ({x: number, y: number, value: string })


export const selectPointPhases: ControlPointStages = (phase, multiplier) => {
    switch (phase) {
        case FIRST_POINT_PHASE:
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
        case SECOND_POINT_PHASE:
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
        case FINAL_SCREEN_PHASE:
            return {
                x: FINISH_SCREEN_X,
                y: FINISH_SCREEN_Y,
                value: formatLabel(multiplier)
            }
        default:
            return {
                x: START_POINT_X,
                y: START_POINT_Y,
                value: ''
            }
    }
};