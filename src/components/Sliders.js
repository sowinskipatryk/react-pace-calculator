import classes from './Sliders.module.css';

import Slider from "./Slider";

const Sliders = (props) => {

    const sliders = [];

    for (let i = 0; i < 24; i++) {
      sliders.push(
        <Slider
          key={i}
          id={i}
          onChange={props.onChange}
        />
      );
    }

    return <div className={classes.sliderContainer}>
        {sliders}
    </div>
}

export default Sliders;