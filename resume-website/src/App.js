import React from 'react';
import Landing from './components/landing/landing.js';
import Navbar from './components/navbar/navbar.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';
import Projects from './components/projects/projects.js';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
