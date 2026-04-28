import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InsightHighlights from './components/InsightHighlights';
import DashboardShowcase from './components/DashboardShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <InsightHighlights />
        <DashboardShowcase />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
