import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import BackgroundDecor from './components/BackgroundDecor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 relative">
        <BackgroundDecor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
