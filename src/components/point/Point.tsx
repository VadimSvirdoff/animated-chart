
import { convertToPercents } from 'src/services';
import './point.css';


type IPoint = (arg: {
    x: number,
    y: number,
    value: string,
    isFinalScreenPhase: boolean,
    pointIcon: string,
    multiplier: number

}) => JSX.Element | null;

const Point: IPoint = ({
    x,
    y,
    value,
    isFinalScreenPhase,
    pointIcon,
    multiplier
}) => {
    return multiplier
        ? (
            isFinalScreenPhase
                ? (
                    <text x={convertToPercents(x)} y={convertToPercents(y)} className='point-final-text'>{value}</text>
                )
                : (
                        <g className='point'>

                            <image
                                x={x + 10}
                                y={y + 42}
                                href={pointIcon}
                                className="point-label"
                            />
                            <text x={x + 20} y={y + 15} className='point-text'>{value}</text>

                        </g>
                )
        )
        : null
    }


export default Point
