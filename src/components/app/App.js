import { useEffect, useState } from 'react';
import Chart from '../chart';
import { useMockInterval } from '../../hooks/useMockInterval';
import rocket from '../../assets/icons/rocket.png'
import "./app.css"

const App = () => {
    const [isStartStage, setisStartStage] = useState(false);
    const [multiplier, initializeMockInterval, clearLinearMockInterval] = useMockInterval();

    useEffect(() => {
        if (isStartStage) {
            initializeMockInterval()
        }
        return () => {
            clearLinearMockInterval()
        }
    }, [isStartStage])

    const startStage = () => setisStartStage(true)
    const finishStage = () => {
        setisStartStage(() => {
            clearLinearMockInterval();
            return false
        });

    }

    return (
        <div className='app'>
            <div className='chart-wrapper'>
                <Chart multiplier={multiplier} isFinalStage={!isStartStage} pointIcon={rocket} />
            </div>
            <div className='buttons-wrapper'>
                <div className='buttons'>
                    <button onClick={startStage}>START STAGE</button>
                    <button onClick={finishStage}>FINISH STAGE</button>
                </div>
            </div>
        </div>
    )

}

export default App
