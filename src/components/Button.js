import './Button.css';

const Button = ({ large, dark, text, onClick }) => {
  return (
    <button className={`button ${dark ? 'dark' : 'bright'}`} onClick={onClick}>
      {(large) ? <h2>{text}</h2> : <h3>{text}</h3>}
    </button>
  );
};

export default Button;