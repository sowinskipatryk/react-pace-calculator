import Stat from './Stat';
import classes from './Stats.module.css';
import { FaRoute, FaRunning, FaRegClock } from "react-icons/fa";

const Stats = (props) => {
    return <ul>
        <Stat icon={FaRunning} text={props.pace} />
        <Stat icon={FaRegClock} text={props.time} />
        <Stat icon={FaRoute} text={props.dist} />
    </ul>
};

export default Stats;