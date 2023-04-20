import Text from './Text';
import Icon from './Icon';
import classes from './Stat.module.css';

const Stat = (props) => {
    return <li>
        <Icon icon={props.icon} />
        <Text text={props.text} />
    </li>
};

export default Stat;