import {
    controlTickValue,
    getCurrentStageIndex,
    isTicksEqual,
    selectTicks
} from './tickService';
import {
    controlPointX,
    controlPointY,
    controlLineTickPosition
} from './positionsService';
import {
    createStages
} from './stagesService';
import {
    formatLabel,
    valueFormat,
    convertToPercents
} from './stringService'
import {
    round
} from './numberService'
import {
    controlLinearCoef
} from './linearCoefService'

export {
    controlTickValue,
    controlPointX,
    controlPointY,
    controlLineTickPosition,
    createStages,
    formatLabel,
    valueFormat,
    convertToPercents,
    round,
    getCurrentStageIndex,
    isTicksEqual,
    selectTicks,
    controlLinearCoef
}