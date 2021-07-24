import { useTicksControl } from '../../hooks/useTIcksControl';
import './chart.css';
import { controlLabel, formatLabel } from '../../utils/controlLabel';
import Point from '../point';
import { useEffect, useRef } from 'react';
import { usePointControl } from '../../hooks/usePointControl';
import ChartConstructor from '../chartConstructor';
import { FINAL_TICK_VALUE } from 'src/components/chart/constants';

const Chart = ({ multiplier, isFinalStage, pointIcon }) => {
    const stagesRef = useRef();

    const {
        point,
        stage: {
            isFinalScreenStage,
            setFinalScreenStage
        },
    } = usePointControl({ multiplier });

    const {
        ticks: {
            initialTick,
            firstTick,
            secondTick,
            thirdTick
        },
        linearCoef
    } = useTicksControl({ multiplier, stages: stagesRef.current });


    useEffect(() => {
        if (multiplier && isFinalStage)
            setTimeout(() => {
                setFinalScreenStage()
            }, 3000);
    }, [isFinalStage])

    return (
        <svg width="100%" height="100%" viewBox="0 0 411 252" fill="grey" xmlns="http://www.w3.org/2000/svg">
            <ChartConstructor
                initialTick={initialTick}
                firstTick={firstTick}
                secondTick={secondTick}
                thirdTick={thirdTick}
                finalTick={FINAL_TICK_VALUE}
                linearCoef={linearCoef}
            />
            <Point
                x={point.x}
                y={point.y}
                value={point.value}
                pointIcon={pointIcon}
                isFinalScreenStage={isFinalScreenStage()}
                isStop={isFinalStage}
                multiplier={multiplier}
            />
        </svg>
    )
}
export default Chart

