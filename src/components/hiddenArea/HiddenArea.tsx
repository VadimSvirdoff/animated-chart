import { BOTTOM_TO_TOP, TOP_TO_BOTTOM } from 'src/constants'

type SelectDirection = (direction: string) => ({y1: number, y2: number, x: number, y: number});
type SelectHeight = (direction: string) => number;
type SelectColor = (direction: string) => string;
type  HiddenArea = (arg: {id: string}) => JSX.Element | null;

const selectDirection: SelectDirection = (direction) => {
    switch (direction) {
        case BOTTOM_TO_TOP:
            return { y1: 1, y2: 0, x: 0, y: 201 }
        case TOP_TO_BOTTOM:
            return { y1: 0, y2: 1, x: 0, y: -20 }
        default:
            return { y1: 1, y2: 0, x: 0, y: -20 }
    }

}

const selectHeight: SelectHeight = (direction) => {
    switch (direction) {
        case BOTTOM_TO_TOP:
            return 90;
        case TOP_TO_BOTTOM:
            return 70
        default:
            return 70
    }
}

const selectColor: SelectColor = (direction) => {
    switch (direction) {
        case BOTTOM_TO_TOP:
            return '#5c54a4';
        case TOP_TO_BOTTOM:
            return '#38285c'
        default:
            return '#38285c'
    }
}

export const HiddenArea: HiddenArea = ({ id }) => {

    const { y1, y2, x, y } = selectDirection(id);
    const height = selectHeight(id)
    const color = selectColor(id)

    return id
        ? <>
            <defs>
                <linearGradient id={id} x1="0" x2="0" y1={y1} y2={y2}>
                    <stop offset="0%" stopColor={color} stopOpacity="1" />
                    <stop offset="75%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.1" />

                </linearGradient>
            </defs>
            <rect x={x} y={y} width="100%" height={height} fill={`url(#${id})`}></rect>

        </>
        : null
}

