import './ProjectModal.css';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as Close } from '../assets/icons/close.svg';

const ProjectModal = ({ show, close, endClose }) => {
  return ReactDom.createPortal(
    <CSSTransition in={show} timeout={300} classNames='fade' unmountOnExit onExited={endClose}>
      <div className='project-modal'>
        <div className='content'>
          <img className='image' src='http://placekitten.com/720/1200' alt='Project 1' />
        </div>
        <Close className='close' fill='white' onClick={close} />
      </div>
    </CSSTransition>,
    document.getElementById('portal')
  );
};

export default ProjectModal;