import React from 'react';

const Experts: React.FC = () => {
  return (
    <section className="experts">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Backed by Science & Leadership</h2>
        <div className="experts-grid">
          <div className="expert-card">
            <img 
              src="peter-greenlaw.jpg" 
              alt="Peter Greenlaw" 
              style={{ background: '#eee' }} 
            />
            <h3>Peter Greenlaw</h3>
            <p>Co-Founder & Creator<br />Transformation Coach & Nutrition Educator</p>
            <a
            href="https://thegreenlawreport.com/"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', fontSize: '0.9em' }}
            >
              Follow The Green Law Report
            </a>
          </div>
          <div className="expert-card">
            <img 
              src="dr-arciero.jpg" 
              alt="Dr. Paul Arciero" 
              style={{ background: '#eee' }} 
            />
            <h3>Dr. Paul Arciero</h3>
            <p>PhD Exercise Physiology<br />Professor, Skidmore College</p>
            <a 
              href="https://paularciero.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', fontSize: '0.9em' }}
            >
              Read His Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
