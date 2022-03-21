import "./App.css";
import { Routes, Route } from "react-router-dom";
import Builder from "./components/Builder/Builder";

import Landing from "./pages/Landing";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='builder' element={<Builder />} />
      </Routes>
    </div>
  );
}

export default App;
