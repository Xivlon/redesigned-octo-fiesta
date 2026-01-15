import React from 'react';

const Experts: React.FC = () => {
  return (
    <section className="experts">
      <div className="container">
        <h2 className="section-title">Backed By Activists in The Field</h2>
        <div className="experts-grid">
          <div className="expert-card">
            <img
              src="peter-greenlaw.jpg"
              alt="Peter Greenlaw"
              className="expert-img"
            />
            <h3>Peter Greenlaw</h3>
            <p>Co-Founder & Creator<br />Transformation Coach & Nutrition Educator</p>
            <a
              href="https://thegreenlawreport.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="expert-link"
            >
              Follow The Green Law Report
            </a>
          </div>
          <div className="expert-card">
            <img
              src="dr-arciero.jpg"
              alt="Dr. Paul Arciero"
              className="expert-img"
            />
            <h3>Dr. Paul Arciero</h3>
            <p>PhD Exercise Physiology<br />Professor, Skidmore College</p>
            <a
              href="https://paularciero.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="expert-link"
            >
              Read His Work
            </a>
          </div>
        </div>

        <div className="experts-videos">
          <h3 className="experts-videos-title">Featured Insights</h3>
          <div className="video-links-grid">
            <a
              href="https://vimeo.com/724576344/91a43fb696"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              <span className="video-icon">▶</span>
              <span className="video-text">Watch Expert Interview 1</span>
            </a>
            <a
              href="https://vimeo.com/725104566/d8efd2144b"
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              <span className="video-icon">▶</span>
              <span className="video-text">Watch Expert Interview 2</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
