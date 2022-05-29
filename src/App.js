import { useState } from 'react';
import Home from './sections/Home';
import ProjectModal from './components/ProjectModal';

function App() {
  const [showProject, setShowProject] = useState(false);

  const openProject = () => {
    setShowProject(true);
    document.body.style.overflow = 'hidden';
  }
  const closeProject = () => setShowProject(false);
  const endCloseProject = () => document.body.style.overflow = 'auto';
  
  return (
    <div>
      <Home />
      <ProjectModal show={showProject} close={closeProject} endClose={endCloseProject} />
    </div>
  );
}

export default App;
