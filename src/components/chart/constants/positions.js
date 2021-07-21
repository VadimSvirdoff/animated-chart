import {
    FINAL_LINE_POSITION,
    FINAL_TICK_POSITION,
    INITIAL_LINE_POSITION,
    INITIAL_TICK_POSITION,
    SECOND_LINE_POSITION,
    SECOND_TICK_POSITION,
    THIRD_LINE_POSITION,
    THIRD_TICK_POSITION,
} from "src/components/chart/constants";

export const POSITIONS = [
    {
        position: INITIAL_LINE_POSITION,
        type: 'INITIAL_POSITION'
    },
    {
        position: INITIAL_LINE_POSITION,
        type: 'FIRST_POSITION'
    },
    {
        position: SECOND_LINE_POSITION,
        type: 'SECOND_POSITION'
    },
    {
        position: THIRD_LINE_POSITION,
        type: 'THIRD_POSITION'
    },
    {
        position: FINAL_LINE_POSITION,
        type: 'FINAL_POSITION'
    },
]