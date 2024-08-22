import classes from './AppBox.module.css';
import Sliders from './Sliders';
import Stats from './Stats';
import Header from './Header';
import { useState, useEffect } from 'react';

const initialValues = {
  totalDuration: 60.0,
  stepPace: 10.0,
  stepTime: 1.0,
};

const AppBox = () => {
  const [runTime, setRunTime] = useState(initialValues.totalDuration);
  const slidersNum = Math.ceil(runTime / initialValues.stepTime);
  const [stepData, setStepData] = useState([]);

  const handleSpeedChange = (index, value) => {
    setStepData((prevStepData) => {
      const newStepData = [...prevStepData];
      newStepData[index] = { ...newStepData[index], pace: value };
      console.log(newStepData);
      return newStepData;
    });
  };

  const handleRunTimeChange = (event) => {
    const newFloatValue = parseFloat(event.target.value);
    if (!isNaN(newFloatValue)) {
      setRunTime(newFloatValue);
    }
  };

  const addRunTime = () => setRunTime((prevRunTime) => prevRunTime + 0.5);
  const subtractRunTime = () => setRunTime((prevRunTime) => prevRunTime - 0.5);

  useEffect(() => {
    setStepData((prevStepData) => {
      const stepsNum = Math.ceil(runTime / initialValues.stepTime);
      const newStepData = [...prevStepData];
      
      if (newStepData.length > stepsNum) {
        newStepData.splice(stepsNum);
      } else if (newStepData.length < stepsNum) {
        const stepsToAdd = stepsNum - newStepData.length;
        const lastPace = newStepData.length > 0 ? newStepData[newStepData.length - 1].pace : initialValues.stepPace;
        const lastTime = initialValues.stepTime;
        for (let i = 0; i < stepsToAdd; i++) {
          newStepData.push({ pace: lastPace, time: lastTime });
        }
      }

      for (let i = 0; i < stepsNum - 1; i++) {
        newStepData[i].time = initialValues.stepTime;
      }

      const lastIndex = newStepData.length - 1;
      const lastStep = newStepData[lastIndex];
      const remainder = runTime % initialValues.stepTime;
      if (remainder !== 0) {
        lastStep.time = remainder;
      } else {
        lastStep.time = initialValues.stepTime;
      }

      console.log(newStepData);
      return newStepData;
    });
  }, [runTime]);

  const runDist = stepData.reduce((acc, step) => acc + (step.pace * step.time / 60), 0);
  const distStr = runDist.toFixed(2) + ' km';

  const runPace = (runTime * 60) / runDist;
  const paceMin = Math.floor(runPace / 60);
  let paceSec = Math.floor(runPace - paceMin * 60);
  if (paceSec < 10) {
    paceSec = '0' + paceSec;
  }
  const paceStr = paceMin + ':' + paceSec + ' min/km';

  const timeStr = runTime + ' min';

  return (
    <div className={classes.appContainer}>
      <Header />
      <Sliders stepData={stepData} handleSpeedChange={handleSpeedChange} slidersNum={slidersNum} />
      <Stats
        pace={paceStr}
        time={timeStr}
        dist={distStr}
        handleRunTimeChange={handleRunTimeChange}
        runTime={runTime.toFixed(1)}
        addRunTime={addRunTime}
        subtractRunTime={subtractRunTime}
      />
    </div>
  );
};

export default AppBox;
