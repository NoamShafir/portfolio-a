import './Introduction.css';
import SunContainer from '../components/sun/SunContainer';

const Introduction = () => {
  return (
    <div className='introduction'>
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
  );
};

export default Introduction;