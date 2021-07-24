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
import ChatPiece  from 'src/components/chartPieces';
import { controlPosition } from 'src/utils/controlPosition';
import { formatLabel } from 'src/utils/formatString';

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
            return <ChatPiece position={position} tick={initialTick} hiddenArea={TOP_TO_BOTTOM}/>
        case FIRST_POSITION_TYPE:
            return <ChatPiece position={controlPosition(position, linearCoef)} tick={formatLabel(firstTick)} />
        case SECOND_POSITION_TYPE:
            return <ChatPiece position={controlPosition(position, linearCoef)} tick={formatLabel(secondTick)} />
        case THIRD_POSITION_TYPE:
            return <ChatPiece position={controlPosition(position, linearCoef)} tick={formatLabel(thirdTick)} />
        case FINAL_POSITION_TYPE:
            return <ChatPiece position={position} tick={finalTick} hiddenArea={BOTTOM_TO_TOP}/>
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
