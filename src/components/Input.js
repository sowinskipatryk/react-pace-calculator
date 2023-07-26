import classes from './Input.module.css';

const Input = (props) => {
    return <input className={classes.numberInput} type='number' step={0.5} value={props.runTime} onChange={props.handleRunTimeChange} />
}

export default Input;