import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Navbar from './sections/Navbar';
import Skills from './sections/Skills';
import Projects from './sections/Project';
import Contact from './sections/Contact';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';


function App() {
  const [loading, setLoading] = useState(true);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <SplashScreen onComplete={handleSplashComplete} />}
      {!loading && <CustomCursor />}
      {!loading && <Navbar />}
      {!loading && <Hero />}
      {!loading && <About />}
      {!loading && <Skills />}
      {!loading && <Projects />}
      {!loading && <Contact />}
      {!loading && <ScrollProgressIndicator />}



    </>
  );
}

export default App;