import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Navbar from "./sections/Navbar";
import Skills from "./sections/Skills";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";

function App() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ScrollProgressIndicator />
        </>
    );
}

export default App;
