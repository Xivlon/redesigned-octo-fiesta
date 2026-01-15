import React from 'react';

const Video: React.FC = () => {
  return (
    <section className="video-section">
      <div className="container">
        <h2>See the Transformation</h2>
        <p>Watch this video to learn more about the science behind the R2M Protocol and real transformation stories.</p>
        <div className="video-container">
          <video 
            controls 
            poster="video-thumbnail.jpg" 
            preload="metadata" 
            aria-label="Video explaining the science and real transformations behind the R2M Protocol"
          >
            <source src="transformation-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
