import { useRef, useState } from 'react';


export const useMockInterval = () => {
    const interval = useRef();
    const [multiplier, setmultiplier] = useState(0);

    const finalMultiplier = 1000;
    const time = 50;

    const changeMultiplier = () => {
            setmultiplier(multiplier => {
                if (multiplier >= finalMultiplier) {
                    clearInterval(interval.current);
                }
                return multiplier+=.01
            })
    }

    const initializeInterval = () => {
        interval.current = setInterval(async () => {
            changeMultiplier()
        }, time)

        return () => {
            clearInterval(interval.current);
        }
    }

    const clearLinearInterval = () => {
        if (interval.current) {
            clearInterval(interval.current)
            interval.current = null;
        };
    };



    return [multiplier, initializeInterval, clearLinearInterval]
}
