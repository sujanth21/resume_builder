import "./App.css";
import { Routes, Route } from "react-router-dom";
import Builder from "./components/Builder/Builder";
import ResumeViewer from "./components/ResumeViewer/ResumeViewer";

import Landing from "./pages/Landing";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='builder' element={<Builder />} />
        <Route path='resume' element={<ResumeViewer />} />
      </Routes>
    </div>
  );
}

export default App;
