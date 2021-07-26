import { useEffect, useState } from 'react'
import { INITIAL_TICKS, POINT_INTERVAL_FINAL_VALUE } from 'src/constants';
import { getCurrentStageIndex, isTicksEqual, selectTicks, controlLinearCoef, createStages } from 'src/services'
import { Tick } from 'src/services/tickService'

type UseTicksControl = (arg: { multiplier: number }) => ({ ticks: Tick, linearCoef: number })

export const useTicksControl: UseTicksControl = ({ multiplier }) => {
    const [ticks, setTicks] = useState(INITIAL_TICKS);
    const [stages] = useState(() => createStages());
    const [linearCoef, setlinearCoef] = useState(0);


    const selectTick = (index: number) => {
        const currnetTicks = selectTicks(index, INITIAL_TICKS, stages);
        if (!isTicksEqual(currnetTicks, ticks)) {
            setTicks(currnetTicks);
        }
    }

    useEffect(() => {
        const index = getCurrentStageIndex(stages, multiplier);
        if (multiplier > POINT_INTERVAL_FINAL_VALUE) {
            const linearCoef = controlLinearCoef(index, stages, multiplier);
            setlinearCoef(linearCoef);
        }
        selectTick(index);

    }, [multiplier]);

    return { ticks, linearCoef }
}
