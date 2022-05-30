import Home from './sections/Home';
import Project from './sections/Project';

function App() {
  return (
    <div>
      <Home />
      <Project dark={false} title='Project 1' desc='Short project description or type' thumbnailImg='http://placekitten.com/600/600' projectImg='http://placekitten.com/720/1200' />
      <Project dark={true} title='Project 2' desc='Short project description or type' thumbnailImg='http://placekitten.com/700/700' projectImg='http://placekitten.com/720/4000' />
      <Project dark={false} title='Project 3' desc='Short project description or type' thumbnailImg='http://placekitten.com/800/800' projectImg='http://placekitten.com/720/2000' />
    </div>
  );
}

export default App;
