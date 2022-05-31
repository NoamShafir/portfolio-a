import './Sun.css';
import CircleSector from './CircleSector';

const Sun = ({ rays }) => {
  const angle = 360 / rays.length;

  return (
    <div className='sun'>
      {rays.map((ray, index) => (
          <CircleSector key={index} projectId={ray.id} image={ray.image} alt={ray.title} angle={angle} initialAngle={index * angle} move={10} scale={ray.scale} />
      ))}
      <img className='center uninteractable' src='http://placekitten.com/400/400' alt='Me' onClick={() => document.getElementById('about').scrollIntoView({ block: 'center' })} />
    </div>
  );
};

export default Sun;