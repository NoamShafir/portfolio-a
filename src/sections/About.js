import './About.css';
import Button from '../components/Button';

const About = () => {
  return (
    <div className='about'>
      <h1>Hi, I'm John Doe!</h1>
      <br/>
      <h3 className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      <br/><br/>
      <Button type='contained' text='CONTACT' onClick={() => console.log('contact click')} />
    </div>
  );
};

export default About;