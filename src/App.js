// import React, { useState } from "react";
// import "./App.scss";

// import { Routes, Route, useLoaderData, useLocation } from "react-router-dom";
// import Home from "./Containers/home";
// import About from "./Containers/about";
// import Resume from "./Containers/resume";
// import Skills from "./Containers/skills";
// import Projects from "./Containers/projects";
// import Contact from "./Containers/contact";
// import NavBar from "./Components/navBar";
// import Achievements from "./Containers/achievements";
// import DarkMode from "./Components/DarkMode/DarkMode";

// function App() {
//   const location = useLocation();
//   console.log(Location);

//   const [toggleIcon, setToggleIcon] = useState(false);

//   return (
//     <div className="App">
//       {/* navbar */}
//       <NavBar toggleIcon={toggleIcon} setToggleIcon={setToggleIcon} />

//       {/* Dark Light */}
//       <DarkMode />

//       {/* main page content */}
//       <div className="App__main-page-content">
//         <Routes>
//           <Route index path="/" element={<Home toggleIcon={toggleIcon} />} />
//           <Route path="/about" element={<About toggleIcon={toggleIcon} />} />
//           <Route path="/resume" element={<Resume toggleIcon={toggleIcon} />} />
//           <Route path="/skills" element={<Skills toggleIcon={toggleIcon} />} />
//           <Route
//             path="/projects"
//             element={<Projects toggleIcon={toggleIcon} />}
//           />
//           <Route
//             path="/contact"
//             element={<Contact toggleIcon={toggleIcon} />}
//           />
//           <Route
//             path="/achievements"
//             element={<Achievements toggleIcon={toggleIcon} />}
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Containers/home";
import About from "./Containers/about";
import Resume from "./Containers/resume";
import Skills from "./Containers/skills";
import Projects from "./Containers/projects";
import Contact from "./Containers/contact";
import NavBar from "./Components/navBar";
import Achievements from "./Containers/achievements";
import DarkMode from "./Components/DarkMode/DarkMode";

function App() {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div className="App">
      {/* navbar */}
      <NavBar toggleIcon={toggleIcon} setToggleIcon={setToggleIcon} />

      {/* DarkMode */}
      <DarkMode />

      {/* main page content */}
      <div className="App__main-page-content">
        <Home path="/" element={<Home toggleIcon={toggleIcon} />} />
        <About path="/about" element={<About toggleIcon={toggleIcon} />} />
        <Resume path="/resume" element={<Resume toggleIcon={toggleIcon} />} />
        <Skills path="/skills" element={<Skills toggleIcon={toggleIcon} />} />
        <Projects
          path="/projects"
          element={<Projects toggleIcon={toggleIcon} />}
        />
        <Achievements
          path="/achievements"
          element={<Achievements toggleIcon={toggleIcon} />}
        />
        <Contact
          path="/contact"
          element={<Contact toggleIcon={toggleIcon} />}
        />
      </div>
    </div>
  );
}

export default App;
