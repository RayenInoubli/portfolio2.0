import { useState } from 'react';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <NavBar
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
