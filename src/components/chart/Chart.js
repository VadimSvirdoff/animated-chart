import { useTicksControl } from '../../hooks/useTIcksControl';
import './chart.css';
import Point from '../point';
import { useEffect, useRef } from 'react';
import { usePointControl } from '../../hooks/usePointControl';
import ChartConstructor from '../chartConstructor';
import { FINAL_TICK_VALUE } from 'src/constants';

const Chart = ({ multiplier, isFinalPhase, pointIcon }) => {
    const {
        point,
        phase: {
            isFinalScreenPhase,
            setFinalScreenPhase
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
    } = useTicksControl({ multiplier });


    useEffect(() => {
        if (multiplier && isFinalPhase)
            setTimeout(() => {
                setFinalScreenPhase()
            }, 3000);
    }, [isFinalPhase])

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
                isFinalScreenPhase={isFinalScreenPhase()}
                isStop={isFinalPhase}
                multiplier={multiplier}
            />
        </svg>
    )
}
export default Chart

