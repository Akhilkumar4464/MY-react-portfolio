import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import SplashScreen from '../components/SplashScreen.jsx';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div
      className="h-screen md:h-screen w-full bg-gradient-to-r from-slate-500 to-slate-900 md:scroll-m-0 md:w-screen flex flex-col overflow-y-auto"
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <section id="home">
          <Home theme={theme} />
        </section>
        <section id="about">
          <About theme={theme} />
        </section>
        <section id="projects">
          <Projects theme={theme} />
        </section>
        <section id="contact">
          <Contact theme={theme} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
