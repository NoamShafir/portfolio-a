import Home from './sections/Home';
import Project from './sections/Project';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Home />
      <Project right={0} title='Project 1' desc='Short project description or type' thumbnailImg='http://placekitten.com/600/600' projectImg='http://placekitten.com/720/1200' />
      <Project right={1} title='Project 2' desc='Short project description or type' thumbnailImg='http://placekitten.com/700/700' projectImg='http://placekitten.com/720/4000' />
      <Project right={0} title='Project 3' desc='Short project description or type' thumbnailImg='http://placekitten.com/800/800' projectImg='http://placekitten.com/720/2000' />
      <Contact />
    </div>
  );
}

export default App;
