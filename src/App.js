import { useState } from 'react';
import Home from './sections/Home';
import ProjectModal from './components/ProjectModal';

function App() {
  const [expandProject, setExpandProject] = useState(false);

  const openProject = () => {
    setExpandProject(true);
    document.body.style.overflow = 'hidden';
  }
  const closeProject = () => {
    setExpandProject(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div>
      <Home />
      <ProjectModal show={expandProject} close={closeProject} />
    </div>
  );
}

export default App;
