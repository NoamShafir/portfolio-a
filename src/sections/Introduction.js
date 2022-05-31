import './Introduction.css';
import SunContainer from '../components/sun/SunContainer';

const Introduction = ({ sunRays }) => {
  return (
    <div className='introduction' id='introduction'>
        <div className='third left'>
            <h1>John Doe</h1>
        </div>
        <div className='third middle'>
            <SunContainer rays={sunRays} />
        </div>
        <div className='third right'>
            <h1>Artist</h1>
        </div>
    </div>
  );
};

export default Introduction;