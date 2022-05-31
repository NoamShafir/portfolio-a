import Home from './sections/Home';
import Project from './sections/Project';
import Contact from './sections/Contact';

const projects = {
  'project-1': { title: 'Project 1', desc: 'Short project description or type', image: 'http://placekitten.com/600/600', projectImage: 'http://placekitten.com/600/1000' },
  'project-2': { title: 'Project 2', desc: 'Short project description or type', image: 'http://placekitten.com/601/601', projectImage: 'http://placekitten.com/600/2000' },
  'project-3': { title: 'Project 3', desc: 'Short project description or type', image: 'http://placekitten.com/602/602', projectImage: 'http://placekitten.com/600/3000' },
  'project-4': { title: 'Project 4', desc: 'Short project description or type', image: 'http://placekitten.com/603/603', projectImage: 'http://placekitten.com/600/2000' },
  'project-5': { title: 'Project 5', desc: 'Short project description or type', image: 'http://placekitten.com/604/604', projectImage: 'http://placekitten.com/600/1000' },
  'project-6': { title: 'Project 6', desc: 'Short project description or type', image: 'http://placekitten.com/605/605', projectImage: 'http://placekitten.com/600/2000' },
  'project-7': { title: 'Project 7', desc: 'Short project description or type', image: 'http://placekitten.com/606/606', projectImage: 'http://placekitten.com/600/3000' }
};

const sunRays = [
  { id: 'project-1', scale: 0.95 },
  { id: 'project-2', scale: 1 },
  { id: 'project-3', scale: 0.9 },
  { id: 'project-4', scale: 1 },
  { id: 'project-5', scale: 1.1 },
  { id: 'project-6', scale: 0.95 },
  { id: 'project-7', scale: 1.1 }
];

function App() {
  sunRays.forEach((ray) => {
    ray.title = projects[ray.id].title;
    ray.image = projects[ray.id].image;
  });

  return (
    <div>
      <Home sunRays={sunRays} />
      {Object.keys(projects).map((id, index) => (
        <Project key={index} id={id} right={index % 2} title={projects[id].title} desc={projects[id].desc} thumbnailImg={projects[id].image} projectImg={projects[id].projectImage} />
      ))}
      <Contact />
    </div>
  );
}

export default App;
