import Stat from './Stat';
import classes from './Stats.module.css';
import { FaRoute, FaRunning, FaRegClock } from "react-icons/fa";

const Stats = (props) => {
    return <ul>
        <Stat icon={FaRunning} text={props.pace} />
        <Stat icon={FaRegClock} text={props.time} input={true} runTime={props.runTime} handleRunTimeChange={props.handleRunTimeChange} addRunTime={props.addRunTime} subtractRunTime={props.subtractRunTime} />
        <Stat icon={FaRoute} text={props.dist} />
    </ul>
};

export default Stats;