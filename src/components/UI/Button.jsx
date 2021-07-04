import './Button.css';

const Button = (props) => <button className="Button" onClick={props.onClick}>{props.title}</button>;

export default Button;
