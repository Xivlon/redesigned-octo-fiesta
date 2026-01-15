import React from 'react';

const Video: React.FC = () => {
  return (
    <section className="video-section">
      <div className="container">
        <h2>A brief Intoduction to the R2M Protocol</h2>
        <div className="video-container">
          <video 
            controls 
            poster="video-thumbnail.jpg" 
            preload="metadata" 
            aria-label="A brief Intoduction to the R2M Protocol"
          >
            <source src="https://r2mwillfixyourhealth.com/are_you_toxic_%20(1080p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
