import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Builder from "./components/Builder/Builder";
import ResumeViewer from "./components/ResumeViewer/ResumeViewer";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Feedback from "./pages/Feedback";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='builder' element={<Builder />} />
        <Route path='resume' element={<ResumeViewer />} />
        <Route path='/about' element={<About />} />
        <Route path='/term' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
