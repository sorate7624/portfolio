import { BrowserRouter } from "react-router-dom";

import {
  About,
  Timeline,
  Hero,
  Navbar,
  Skill,
  Career,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skill />
          <Timeline />
        <Career />
      </div>
    </BrowserRouter>
  );
};

export default App;
