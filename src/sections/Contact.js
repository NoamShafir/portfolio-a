import './Contact.css';
import { ReactComponent as LinkedInLogo } from '../assets/icons/linkedin.svg';
import { ReactComponent as EmailLogo } from '../assets/icons/email.svg';

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Thanks for visiting my portfolio!</h2>
        <br/>
        <h1>Contact</h1>
        <br/>
        <div className='option'>
            <EmailLogo fill='white' />
            <a href='mailto:johndoe@gmail.com' className='address' target="_blank" rel="noopener noreferrer">
                <h3>johndoe@gmail.com</h3>
            </a>
        </div>
        <br/>
        <div className='option'>
            <LinkedInLogo className='linkedin-logo' />
            <a href='https://www.linkedin.com/in/johndoe/' className='address' target="_blank" rel="noopener noreferrer">
                <h3>linkedin.com/in/johndoe</h3>
            </a>
        </div>
    </div>
  );
};

export default Contact;