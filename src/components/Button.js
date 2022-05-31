import './Button.css';

const Button = ({ type, text, onClick }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      <h3>{text}</h3>
    </button>
  );
};

export default Button;