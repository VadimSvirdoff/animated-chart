import { POSITIONS } from 'src/components/chart/constants/positions';
import {
    INITIAL_POSITION_TYPE,
    FIRST_POSITION_TYPE,
    SECOND_POSITION_TYPE,
    THIRD_POSITION_TYPE,
    FINAL_POSITION_TYPE,
    TOP_TO_BOTTOM,
    BOTTOM_TO_TOP
} from 'src/components/chart/constants';
import ChatPiece from 'src/components/chartPieces';
import { controlLabel, controlPosition } from 'src/services';


const selectPosition = ({
    type,
    position,
    initialTick,
    firstTick,
    secondTick,
    thirdTick,
    finalTick,
    linearCoef
}) => {
    switch (type) {
        case INITIAL_POSITION_TYPE:
            return <ChatPiece
                position={position}
                tick={controlLabel({ currentTickValue: firstTick, nextTickValue: initialTick, linearCoef })}
                hiddenArea={TOP_TO_BOTTOM} />
        case FIRST_POSITION_TYPE:
            return <ChatPiece
                position={controlPosition({ position, linearCoef })}
                tick={firstTick} />
        case SECOND_POSITION_TYPE:
            return <ChatPiece
                position={controlPosition({ position, linearCoef })}
                tick={secondTick} />
        case THIRD_POSITION_TYPE:
            return <ChatPiece
                position={controlPosition({ position, linearCoef })}
                tick={thirdTick} />
        case FINAL_POSITION_TYPE:
            return <ChatPiece
                position={position}
                tick={finalTick}
                hiddenArea={BOTTOM_TO_TOP} />
    }
}

const ChartConstructor = ({
    initialTick,
    firstTick,
    secondTick,
    thirdTick,
    finalTick,
    linearCoef
}) => (
    POSITIONS
        .map(({ position, type }) => (
            selectPosition({
                position,
                type,
                initialTick,
                firstTick,
                secondTick,
                thirdTick,
                finalTick,
                linearCoef
            })
        ))
)

export default ChartConstructor
