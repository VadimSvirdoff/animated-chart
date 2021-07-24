// import { useEffect, useState} from 'react'
import { isEqual } from 'lodash';
import { stages } from 'src/services/stages';
import { useEffect, useState } from 'react'
import { POINT_INTERVAL_FINAL_VALUE } from 'src/components/chart/constants';

const INITIAL_TICK_VALUE = 5;
const FIRST_TICK_VALUE = 4;
const SECOND_TICK_VALUE = 3;
const THIRD_TICK_VALUE = 2;

const initialTicks = {
    initialTick: INITIAL_TICK_VALUE,
    firstTick: FIRST_TICK_VALUE,
    secondTick: SECOND_TICK_VALUE,
    thirdTick: THIRD_TICK_VALUE
}


export const useTicksControl = ({ multiplier }) => {
    const [ticks, setTicks] = useState(initialTicks);
    const [allStages] = useState(() => stages());
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
            ? initialTicks
            : {
                initialTick: allStages[index + 3],
                firstTick: allStages[index + 2],
                secondTick: allStages[index + 1],
                thirdTick: allStages[index],
            }
    }

    const controlTick = (index) => {
        const currnetTick = selectTicks(index);
        if (!isTicksEqual(currnetTick)) {
            setTicks(currnetTick)
        }
    }

    const controlLinearCoef = (index) => {
        const second = allStages[index + 1];
        const third = allStages[index + 2];
        const diff = third - second;
        const currentDiff = ( diff - (third - multiplier - .5)) / diff;
        setlinearCoef(() => {
            return currentDiff
        })
    }

    useEffect(() => {
        const index = getIndex();
        if(multiplier > POINT_INTERVAL_FINAL_VALUE){
            controlLinearCoef(index);  
        }
        controlTick(index);

    }, [multiplier]);

    return { ticks, linearCoef }
}
