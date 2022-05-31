import './ContactOption.css';

const ContactOption = ({ Logo, text, link }) => {
  return (
    <a className='contact-option' href={link} target='_blank' rel='noopener noreferrer'>
        <Logo className='logo' />
        <h3 className='address'>{text}</h3>
    </a>
  );
};

export default ContactOption;