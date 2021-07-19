import {
    FINAL_TICK_VALUE,
    FOURTH_LINE_POSITION,
    FOURTH_TICK_POSITION,
    INITIAL_LINE_POSITION,
    INITIAL_TICK_POSITION,
    SECOND_LINE_POSITION,
    SECOND_TICK_POSITION,
    THIRD_LINE_POSITION,
    THIRD_TICK_POSITION
} from "../components/chart/constants";

export const positions = ({ initialTick, firstTick, secondTick, thirdTick }) => [
    {
        linePosition: INITIAL_LINE_POSITION,
        textPosition: INITIAL_TICK_POSITION,
        dynamycLinePosition: INITIAL_LINE_POSITION,
        dynamycTextPosition: INITIAL_TICK_POSITION,
        tick: firstTick,
        initialTick: initialTick,
        initial: true
    },
    {
        dynamycLinePosition: SECOND_LINE_POSITION,
        dynamycTextPosition: SECOND_TICK_POSITION,
        tick: secondTick,
    },
    {
        dynamycLinePosition: THIRD_LINE_POSITION,
        dynamycTextPosition: THIRD_TICK_POSITION,
        tick: thirdTick,
    },
    {
        linePosition: FOURTH_LINE_POSITION,
        textPosition: FOURTH_TICK_POSITION,
        finalTick: FINAL_TICK_VALUE,
    },
]