import './IconSwitch.css';
import PropTypes from 'prop-types';

const IconSwitch = (props) => {
    return (
        <div className="IconSwitch">
            <span className="material-icons" onClick={props.onSwitch}>{props.icon}</span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;
