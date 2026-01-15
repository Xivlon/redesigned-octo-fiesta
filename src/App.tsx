import React, { useState } from 'react';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Story from './components/Story';
import HowItWorks from './components/HowItWorks';
import Video from './components/Video';
import Pricing from './components/Pricing';
import Experts from './components/Experts';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  return (
    <> 
      <Hero />
      <Video />
      <Comparison />
      <Story />
      <HowItWorks />
      <Pricing setSelectedPack={setSelectedPack} />
      <Experts />
      <ContactForm selectedPack={selectedPack} />
      <Footer />
    </>
  );
}

export default App;
