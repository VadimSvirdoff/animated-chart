import { useEffect, useState } from 'react';
import Chart from '../chart';
import { useMockInterval } from '../../hooks/useMockInterval';
import rocket from '../../assets/icons/rocket.png'
import "./app.css"

const App = () => {
    const [isStartPhase, setisStartPhase] = useState(false);
    const [multiplier, initializeMockInterval, clearLinearMockInterval] = useMockInterval();

    useEffect(() => {
        if (isStartPhase) {
            initializeMockInterval()
        }
        return () => {
            clearLinearMockInterval()
        }
    }, [isStartPhase])

    const startPhase = () => setisStartPhase(true)
    const finishPhase = () => {
        setisStartPhase(() => {
            clearLinearMockInterval();
            return false
        });

    }

    return (
        <div className='app'>
            <div className='chart-wrapper'>
                <Chart multiplier={multiplier} isFinalPhase={!isStartPhase} pointIcon={rocket} />
            </div>
            <div className='buttons-wrapper'>
                <div className='buttons'>
                    <button onClick={startPhase}>START PHASE</button>
                    <button onClick={finishPhase}>FINISH PHASE</button>
                </div>
            </div>
        </div>
    )

}

export default App
