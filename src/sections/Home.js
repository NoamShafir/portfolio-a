import './Home.css';
import Introduction from './Introduction';
import About from './About';

const Home = () => {
  return (
    <div className='home'>
      <Introduction />
      <About />
    </div>
  );
};

export default Home;