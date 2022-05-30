import './Button.css';

const Button = ({ fill, text, onClick }) => {
  return (
    <button className={`button ${fill ? 'fill' : 'outline'}`} onClick={onClick}>
      <h3>{text}</h3>
    </button>
  );
};

export default Button;