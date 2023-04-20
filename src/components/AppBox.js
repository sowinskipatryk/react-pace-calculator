import classes from './AppBox.module.css';
import Sliders from './Sliders';
import Stats from './Stats';
import Header from './Header';
import { useState } from 'react';

const AppBox = () => {
    const [runTime, setRunTime] = useState(60);
    const initialValues = Array(runTime / 2.5).fill(10);
    const [speedValuesArr, setSpeedValuesArr] = useState(initialValues);

    const handleChange = (index, value) => {
        const newSpeedValuesArr = [...speedValuesArr];
        newSpeedValuesArr[index] = value;
        setSpeedValuesArr(newSpeedValuesArr);
    }
    
    let sum = 0;
    for(let i = 0; i < speedValuesArr.length; i++) {
        sum += speedValuesArr[i];
      }
    const runDist = sum * 2.5 / 60;
    const distStr = runDist.toFixed(2) + ' km';

    const runPace = runTime * 60 / runDist;
    const paceMin = Math.floor(runPace / 60);
    let paceSec = Math.floor(runPace - (paceMin * 60));
    if (paceSec < 10) {
        paceSec = '0' + paceSec;
    }
    const paceStr = paceMin + ':' + paceSec + ' min/km';

    const timeStr = runTime + ' min';
    return <div className={classes.appContainer}>
        <Header />
        <Sliders onChange={handleChange} />
        <Stats pace={paceStr} time={timeStr} dist={distStr} />
    </div>
};

export default AppBox;