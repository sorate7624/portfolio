import { BrowserRouter } from 'react-router-dom';

import { About, Timeline, Home, Navbar, Skill, Project } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Home />
        </div>
        <About />
        <Skill />
        <Timeline />
        <Project />
      </div>
    </BrowserRouter>
  );
};

export default App;
