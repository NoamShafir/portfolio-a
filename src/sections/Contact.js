import './Contact.css';
import ContactOption from '../components/ContactOption';
import { ReactComponent as EmailLogo } from '../assets/icons/email.svg';
import { ReactComponent as PhoneLogo } from '../assets/icons/phone.svg';
import { ReactComponent as LinkedInLogo } from '../assets/icons/linkedin.svg';
import BackToTopButton from '../components/BackToTopButton';

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Thanks for visiting my portfolio!</h2>
        <br/>
        <h1>Contact</h1>
        <br/>
        <ContactOption Logo={EmailLogo} text='johndoe@gmail.com' link='mailto:johndoe@gmail.com' />
        <br/>
        <ContactOption Logo={PhoneLogo} text='123-4567-890' link='tel:1234567890' />
        <br/>
        <ContactOption Logo={LinkedInLogo} text='linkedin.com/in/johndoe' link='https://www.linkedin.com/in/johndoe/' />
        <BackToTopButton right={true} />
    </div>
  );
};

export default Contact;