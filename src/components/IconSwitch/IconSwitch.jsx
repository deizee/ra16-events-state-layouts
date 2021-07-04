import './IconSwitch.css';

const IconSwitch = (props) => {
    return (
        <div className="IconSwitch">
            <span className="material-icons" onClick={props.onSwitch}>{props.icon}</span>
        </div>
    )
}

export default IconSwitch;
