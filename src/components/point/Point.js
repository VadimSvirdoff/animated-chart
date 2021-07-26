
import { convertToPercents } from 'src/services';
import './point.css';

const Point = ({
    x,
    y,
    value,
    isFinalScreenStage,
    pointIcon,
    multiplier
}) => multiplier
        ? (
            isFinalScreenStage
                ? (
                    <text x={convertToPercents(x)} y={convertToPercents(y)} className='point-final-text'>{value}</text>
                )
                : (
                    <>
                        <g className='point'>

                            <image
                                x={x + 10}
                                y={y + 42}
                                href={pointIcon}
                                alt="🚀"
                                className="point-label"
                            />
                            <text x={x + 20} y={y + 15} className='point-text'>{value}</text>

                        </g>

                    </>
                )
        )
        : null


export default Point
