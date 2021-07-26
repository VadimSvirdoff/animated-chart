import { isEqual } from 'lodash';
import { createStages } from 'src/services';
import { useEffect, useState } from 'react'
import {INITIAL_TICKS, POINT_INTERVAL_FINAL_VALUE} from 'src/constants';

export const useTicksControl = ({ multiplier }) => {
    const [ticks, setTicks] = useState(INITIAL_TICKS);
    const [allStages] = useState(() => createStages());
    const [linearCoef, setlinearCoef] = useState(0);

    const isTicksEqual = (stage) => (isEqual(ticks, stage));

    const getIndex = () => {
        return allStages.findIndex((tick, id) => {
            const first = allStages[id + 1]
            const last = allStages[id + 2]
            const index = first + (last - first) / 2;
            return index > multiplier
        })
    }

    const selectTicks = (index) => {
        const isInitialTicks = index === 0;

        return isInitialTicks
            ? INITIAL_TICKS
            : {
                initialTick: allStages[index + 3],
                firstTick: allStages[index + 2],
                secondTick: allStages[index + 1],
                thirdTick: allStages[index],
            }
    }

    const selectTick = (index) => {
        const currnetTick = selectTicks(index);
        if (!isTicksEqual(currnetTick)) {
            setTicks(currnetTick)
        }
    }

    const controlLinearCoef = (index) => {
        const second = allStages[index + 1];
        const third = allStages[index + 2];
        const diff = third - second;
        const currentDiff = (diff - (third - multiplier - .5)) / diff;
        setlinearCoef(() => {
            return currentDiff
        })
    }

    useEffect(() => {
        const index = getIndex();
        if (multiplier > POINT_INTERVAL_FINAL_VALUE) {
            controlLinearCoef(index);
        }
        selectTick(index);

    }, [multiplier]);

    return { ticks, linearCoef }
}
