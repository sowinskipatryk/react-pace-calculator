import classes from './Text.module.css';

const Text = (props) => {
    return <div className={`${classes.statText} ${props.className}`}>{props.text}</div>
}

export default Text;