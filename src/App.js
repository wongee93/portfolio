import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Aboutme from "./Aboutme"
import Skill from "./Skill"
import Project from "./Project"
import Workexperience from "./Workexperience"
import Education from "./Education"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Aboutme />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/work" element={<Workexperience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  )
}

export default App;
