import './Project.css';
import { useState } from 'react';
import Button from '../components/Button';
import BackToTopButton from '../components/BackToTopButton';
import ProjectModal from '../components/ProjectModal';

const Project = ({ id, right, title, desc, thumbnailImg, projectImg }) => {
  const [showProject, setShowProject] = useState(false);

  const openProject = () => {
    setShowProject(true);
    document.body.style.overflow = 'hidden';
  }
  const closeProject = () => setShowProject(false);
  const endCloseProject = () => document.body.style.overflow = 'auto';

  return (
    <>
      <div className={`project ${right ? 'right' : 'left'}`} id={id}>
        <img className='image' src={thumbnailImg} alt={title} />
        <div className='info'>
          <h1>{title}</h1>
          <h2>{desc}</h2>
          <br/><br/>
          <Button type='outlined' text='VIEW PROJECT' onClick={openProject} />
        </div>
        <BackToTopButton right={!right} />
      </div>
      <ProjectModal show={showProject} close={closeProject} endClose={endCloseProject} title={title} projectImg={projectImg} />
    </>
  );
};

export default Project;