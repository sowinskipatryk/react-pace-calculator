import classes from "./Slider.module.css";
import { useRef, useState, useEffect } from "react";

const Slider = (props) => {
  const { pace, time } = props.stepData  || {};
  const ref = useRef(null);
  const [speed, setSpeed] = useState(pace || 10);

  const onChangeHandler = (e) => {
    setSpeed(e.target.value);
    props.handleSpeedChange(props.id, parseFloat(e.target.value));
  };

  useEffect(() => {
    if (pace !== undefined) {
      setSpeed(pace);
    }
  }, [pace]);

  return (
    <div className={classes.sliderContainer}>
      <input
        className={classes.slider}
        type="range"
        id={`slider-${props.id}`}
        min="0"
        max="18"
        step="0.1"
        value={speed}
        ref={ref}
        onChange={onChangeHandler}
      />
      <label htmlFor={`slider-${props.id}`}>
        <p>{props.id === 0 ? 'v': ''} {speed}</p>
        <p>{props.id === 0 ? 's': ''} {(speed * time / 60).toFixed(2)}</p>
        <p>{props.id === 0 ? 't': ''} {time}</p>
      </label>
    </div>
  );
};

export default Slider;
