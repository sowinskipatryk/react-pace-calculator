import Text from './Text';
import Icon from './Icon';
import Input from './Input';
import classes from './Stat.module.css';
import InputIcons from './InputIcons';

const Stat = (props) => {
    return <li>
        <Icon icon={props.icon} />
        {props.input ? <><Input handleRunTimeChange={props.handleRunTimeChange} runTime={props.runTime} /><Text className={classes.noPadding} text='min' /><InputIcons addRunTime={props.addRunTime} subtractRunTime={props.subtractRunTime} /></> : <Text text={props.text} />}
    </li>
};

export default Stat;