import './Project.css';
import { useState } from 'react';
import Button from '../components/Button';
import ProjectModal from '../components/ProjectModal';

const Project = ({ dark, title, desc, thumbnailImg, projectImg }) => {
  const [showProject, setShowProject] = useState(false);

  const openProject = () => {
    setShowProject(true);
    document.body.style.overflow = 'hidden';
  }
  const closeProject = () => setShowProject(false);
  const endCloseProject = () => document.body.style.overflow = 'auto';

  return (
    <>
      <div className={`project ${dark ? 'dark' : 'bright'}`}>
        <img className='image' src={thumbnailImg} alt={title} />
        <div className='info'>
          <h1>{title}</h1>
          <h2>{desc}</h2>
          <br/><br/>
          <Button large={false} dark={!dark} text='VIEW PROJECT' onClick={openProject} />
        </div>
      </div>
      <ProjectModal show={showProject} close={closeProject} endClose={endCloseProject} title={title} projectImg={projectImg} />
    </>
  );
};

export default Project;