import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>It's Not Just Weight Loss.<br />It's Cellular Restoration.</h1>
        <p>Discover the nutritional protocol that helps you reclaim your vitality through targeted nutrition and cellular support.</p>
        <a href="#contact" className="btn" onClick={scrollToContact}>Start Your Journey</a>

        <div className="welcome-widget">
          <img src="/IMG-20260116-WA0004.jpg" alt="Welcome" className="welcome-pfp" />
          <div className="welcome-text-box">
            <p>Welcome to my page!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
