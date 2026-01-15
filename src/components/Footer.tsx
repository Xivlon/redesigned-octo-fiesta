import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="disclaimer">
      <div className="container">
        <p>
          <strong>MEDICAL DISCLAIMER:</strong> The information shared on this website reflects personal experience and is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
        </p>
        <p>
          Always consult with a qualified healthcare professional before starting any nutritional or wellness program, especially if you have a medical condition or are taking medication.
        </p>
        <p>&copy; {new Date().getFullYear()} R2M Protocol. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
