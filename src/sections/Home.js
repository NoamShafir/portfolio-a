import './Home.css';
import Introduction from './Introduction';
import About from './About';

const Home = ({ sunRays }) => {
  return (
    <div className='home'>
      <Introduction sunRays={sunRays} />
      <About />
    </div>
  );
};

export default Home;