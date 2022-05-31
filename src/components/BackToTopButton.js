import './BackToTopButton.css';
import Button from './Button';

const BackToTopButton = ({ right }) => {
  return (
    <div className={`back-to-top-button ${right ? 'right' : 'left'}`}>
      <Button type='text' text='BACK TO TOP ⬆' onClick={null} />
    </div>
  );
};

export default BackToTopButton;