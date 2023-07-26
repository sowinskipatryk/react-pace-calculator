import classes from "./Slider.module.css";
import { useRef, useState } from "react";

const Slider = (props) => {
  const ref = useRef(null);
  const [speed, setSpeed] = useState(10);

  const onChangeHandler = (e) => {
    setSpeed(e.target.value);
    props.handleSpeedChange(props.id, parseFloat(e.target.value));
  };

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
        <p>{speed}</p>
      </label>
    </div>
  );
};

export default Slider;
