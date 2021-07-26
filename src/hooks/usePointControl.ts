import { useState, useEffect } from 'react';
import {
    FIRST_POINT_PHASE,
    SECOND_POINT_PHASE,
    FINAL_SCREEN_PHASE,
    POINT_INTERVAL_FINAL_VALUE
} from '../constants';
import { selectPointPhases } from 'src/services';

type UsePointControl = (arg: { multiplier: number }) => ({
    point: { x: number, y: number, value: string },
    phase: {
        isSecondPhase: () => boolean,
        isFinalScreenPhase: () => boolean,
        setFinalScreenPhase: () => void
    }
})

export const usePointControl: UsePointControl = ({ multiplier }) => {
    const [phase, setPhase] = useState('');

    useEffect(() => {
        if (multiplier < POINT_INTERVAL_FINAL_VALUE) {
            setPhase(FIRST_POINT_PHASE);
        }
    }, []);

    useEffect(() => {
        if (multiplier >= POINT_INTERVAL_FINAL_VALUE) {
            setPhase(SECOND_POINT_PHASE);
        }
    }, [multiplier]);

    const isSecondPhase = () => SECOND_POINT_PHASE === phase;
    const isFinalScreenPhase = () => FINAL_SCREEN_PHASE === phase;
    const setFinalScreenPhase = () => setPhase(FINAL_SCREEN_PHASE);

    const point = selectPointPhases(phase, multiplier);

    return { point, phase: { isSecondPhase, isFinalScreenPhase, setFinalScreenPhase } };
}
