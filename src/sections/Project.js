import './Project.css';
import { useState } from 'react';
import Button from '../components/Button';
import ProjectModal from '../components/ProjectModal';

const Project = ({ right, title, desc, thumbnailImg, projectImg }) => {
  const [showProject, setShowProject] = useState(false);

  const openProject = () => {
    setShowProject(true);
    document.body.style.overflow = 'hidden';
  }
  const closeProject = () => setShowProject(false);
  const endCloseProject = () => document.body.style.overflow = 'auto';

  return (
    <>
      <div className={`project ${right ? 'right' : 'left'}`}>
        <img className='image' src={thumbnailImg} alt={title} />
        <div className='info'>
          <h1>{title}</h1>
          <h2>{desc}</h2>
          <br/><br/>
          <Button fill={false} text='VIEW PROJECT' onClick={openProject} />
        </div>
      </div>
      <ProjectModal show={showProject} close={closeProject} endClose={endCloseProject} title={title} projectImg={projectImg} />
    </>
  );
};

export default Project;