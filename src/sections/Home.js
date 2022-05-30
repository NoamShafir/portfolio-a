import './Home.css';
import SunContainer from '../components/sun/SunContainer';
import About from './About';

const Home = () => {
  return (
    <div className='home'>
      <div className='intro'>
        <div className='third left'>
          <h1>John Doe</h1>
        </div>
        <div className='third middle'>
          <SunContainer />
        </div>
        <div className='third right'>
          <h1>Artist</h1>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;