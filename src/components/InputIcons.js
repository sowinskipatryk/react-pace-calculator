import classes from './InputIcons.module.css';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const InputIcons = (props) => {
    return <div className={classes.iconContainer}>
        <a href="#" onClick={props.addRunTime}><FaCaretUp /></a>
        <a href="#" onClick={props.subtractRunTime}><FaCaretDown /></a>
    </div>
}

export default InputIcons;