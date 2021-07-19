import { useTicksControl } from '../../hooks/useTIcksControl';
import './chart.css';
import { Final, Initial, Middle } from './ChartPieces';
import { positions } from '../../services/positions';
import { controlPosition } from '../../utils/controlPosition';
import { controlLabel, formatLabel } from '../../utils/controlLabel';
import { tickFormat } from 'src/utils/formatString';
import Point from '../point/Point';
import { useEffect, useRef } from 'react';
import { usePointControl } from '../../hooks/usePointControl';

const Chart = ({ multiplier, isFinalStage, pointIcon }) => {
    const stagesRef = useRef();

    const { point, stage: { isSecondStage, isFinalScreenStage, setFinalScreenStage } } = usePointControl({ multiplier });

    // CREATE TICKS
    const {ticks, linearCoef} = useTicksControl({ multiplier, stages: stagesRef.current });


    useEffect(() => {
        if (multiplier && isFinalStage)
            setTimeout(() => {
                setFinalScreenStage()
            }, 3000);
    }, [isFinalStage])



    // CONTROL MOCK MULTIPLIER
    return (
        <>
            <div className='chart'>
                <svg width="100%" height="100%" viewBox="0 0 411 252" fill="grey" xmlns="http://www.w3.org/2000/svg">
                    {
                        positions({ ...ticks }).map(({
                            linePosition,
                            textPosition,
                            initialTick,
                            finalTick,
                            tick,
                            dynamycTextPosition,
                            dynamycLinePosition
                        },
                            index
                        ) => {
                            if (initialTick) {
                                return <Initial
                                    dynamycTextPosition={controlPosition(dynamycTextPosition, linearCoef)}
                                    dynamycLinePosition={controlPosition(dynamycLinePosition, linearCoef)}
                                    textPosition={textPosition}
                                    tick={formatLabel(tick)}
                                    initialTick={controlLabel(tick, initialTick, linearCoef)}
                                    linePosition={linePosition}
                                    key={index} />
                            } else if (finalTick) {
                                return <Final
                                    textPosition={textPosition}
                                    finalTick={tickFormat(finalTick)}
                                    linePosition={linePosition}
                                    key={index} />
                            } else {
                                return <Middle
                                    dynamycTextPosition={controlPosition(dynamycTextPosition, linearCoef)}
                                    dynamycLinePosition={controlPosition(dynamycLinePosition, linearCoef)}
                                    tick={formatLabel(tick)}
                                    key={index} />
                            }
                        })
                    }
                    {multiplier
                        ? <Point
                            x={point.x}
                            y={point.y}
                            value={point.value}
                            pointIcon={pointIcon}
                            isFinalScreenStage={isFinalScreenStage()}
                            isStop={isFinalStage} />
                        : null
                    }
                </svg>
            </div>
        </>
    )
}
export default Chart

