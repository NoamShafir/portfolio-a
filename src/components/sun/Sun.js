import './Sun.css';
import CircleSector from './CircleSector';

const rays = [
    { image: 'http://placekitten.com/400/400', alt: 'Kitten 1', scale: 0.95 },
    { image: 'http://placekitten.com/401/400', alt: 'Kitten 2', scale: 1 },
    { image: 'http://placekitten.com/402/400', alt: 'Kitten 3', scale: 0.9 },
    { image: 'http://placekitten.com/400/401', alt: 'Kitten 4', scale: 1 },
    { image: 'http://placekitten.com/401/401', alt: 'Kitten 5', scale: 1.1 },
    { image: 'http://placekitten.com/402/401', alt: 'Kitten 6', scale: 0.95 },
    { image: 'http://placekitten.com/400/402', alt: 'Kitten 7', scale: 1.1 }
];

const Sun = () => {
  const angle = 360 / 7;
  return (
    <div className='sun'>
      {rays.map((ray, index) => (
          <CircleSector key={index} image={ray.image} alt={ray.alt} angle={angle} initialAngle={index * angle} move={10} scale={ray.scale} />
      ))}
      <img className='center uninteractable' src='http://placekitten.com/400/400' alt='Me' />
    </div>
  );
};

export default Sun;