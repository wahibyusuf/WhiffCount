
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GeminiFeatures from './components/GeminiFeatures';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <GeminiFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default App;
