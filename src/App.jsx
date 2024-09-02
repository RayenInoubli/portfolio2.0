import { useEffect, useState } from 'react';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = '#08090A';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [isDark])

  return (
    <div>
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
    </div>
  )
}

export default App
