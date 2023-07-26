import classes from './Sliders.module.css';

import Slider from "./Slider";

const Sliders = (props) => {

    const sliders = [];

    for (let i = 0; i < props.slidersNum; i++) {
      sliders.push(
        <Slider
          key={i}
          id={i}
          stepData={props.stepData[i]}
          handleSpeedChange={props.handleSpeedChange}
        />
      );
    }

    return <div className={classes.sliderContainer}>
        {sliders}
    </div>
}

export default Sliders;