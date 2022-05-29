import './ProjectModal.css';
import ReactDom from 'react-dom';
import { ReactComponent as Close } from '../assets/icons/close.svg';

const ProjectModal = ({ show, close }) => {
  if (!show)
    return null;
  
  return ReactDom.createPortal(
    <div className='project-modal'>
      <div className='content'>
        <img className='image' src='http://placekitten.com/720/1200' alt='Project 1' />
      </div>
      <Close className='close' fill='white' onClick={close} />
    </div>,
    document.getElementById('portal')
  );
};

export default ProjectModal;