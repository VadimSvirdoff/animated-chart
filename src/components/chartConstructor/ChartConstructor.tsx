import {
    INITIAL_POSITION_TYPE,
    FIRST_POSITION_TYPE,
    SECOND_POSITION_TYPE,
    THIRD_POSITION_TYPE,
    FINAL_POSITION_TYPE,
    TOP_TO_BOTTOM,
    BOTTOM_TO_TOP,
    POSITIONS
} from 'src/constants';
import ChatPiece from 'src/components/chartPieces';
import { controlTickValue, controlLineTickPosition } from 'src/services';

type ChartConstructor = (arg: {
    initialTick: number,
    firstTick: number,
    secondTick: number,
    thirdTick: number,
    finalTick: number,
    linearCoef: number
})=> (JSX.Element)[];

type selectPosition = (arg: {
    type: string,
    position: number,
    initialTick: number,
    firstTick: number,
    secondTick: number,
    thirdTick: number,
    finalTick: number,
    linearCoef: number
}) => JSX.Element;


const selectPosition: selectPosition = ({
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
                tick={controlTickValue({ currentTickValue: firstTick, nextTickValue: initialTick, linearCoef })}
                hiddenArea={TOP_TO_BOTTOM} />
        case FIRST_POSITION_TYPE:
            return <ChatPiece
                position={controlLineTickPosition({ position, linearCoef })}
                tick={firstTick.toString()} />
        case SECOND_POSITION_TYPE:
            return <ChatPiece
                position={controlLineTickPosition({ position, linearCoef })}
                tick={secondTick.toString()} />
        case THIRD_POSITION_TYPE:
            return <ChatPiece
                position={controlLineTickPosition({ position, linearCoef })}
                tick={thirdTick.toString()} />
        case FINAL_POSITION_TYPE:
            return <ChatPiece
                position={position}
                tick={finalTick.toString()}
                hiddenArea={BOTTOM_TO_TOP} />
        default:
            return <></>
    }
}

const ChartConstructor: ChartConstructor = ({
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
