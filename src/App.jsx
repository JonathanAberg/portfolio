import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WorkShowcase from "./components/WorkShowcase";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkShowcase />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
