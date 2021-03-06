import {
    INITIAL_POSITION_TYPE,
    FIRST_POSITION_TYPE,
    SECOND_POSITION_TYPE,
    THIRD_POSITION_TYPE,
    FINAL_POSITION_TYPE
} from "src/constants";

export const DIFF = 67;

const INITIAL_POSITION = 29.5;
const SECOND_POSITION = INITIAL_POSITION + DIFF;
const THIRD_POSITION = INITIAL_POSITION + DIFF * 2;
const FINAL_POSITION = INITIAL_POSITION + DIFF * 3;



export const POSITIONS = [
    {
        position: INITIAL_POSITION,
        type: INITIAL_POSITION_TYPE
    },
    {
        position: INITIAL_POSITION,
        type: FIRST_POSITION_TYPE
    },
    {
        position: SECOND_POSITION,
        type:SECOND_POSITION_TYPE
    },
    {
        position: THIRD_POSITION,
        type: THIRD_POSITION_TYPE
    },
    {
        position: FINAL_POSITION,
        type: FINAL_POSITION_TYPE
    },
]